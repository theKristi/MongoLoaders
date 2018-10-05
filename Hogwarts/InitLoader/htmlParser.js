export class Parser {
    parse(tableSelected) {
        let list = [];
        //pull off properties into array
        if (tableSelected && tableSelected.children.length > 0) {
            let tbody = tableSelected.tBodies[0];
            let properties = this.getAttributesFromHtml(tableSelected.tHead);

            //for each row in collection
            for (let i = 0; i < tbody.rows.length; i++) {
                let rowparent = tbody.rows[i];
                let newObject = this.emptyObject(properties);

                let row = rowparent.children;

                for (let cell = 0; cell < row.length; cell++) {
                    if (properties[cell] != undefined) {
                        if (row[cell].children[0] !== undefined) {
                            //get child property value
                            let chlidNodeName = row[cell].children[0].nodeName;
                            let childClassName = row[cell].children[0].className;

                            switch (chlidNodeName) {
                                case "SELECT":
                                    newObject[properties[cell]] = row[cell].children[0].selectedOptions[0].value;
                                    break;
                                case "INPUT":
                                    if (childClassName === "check-box")
                                        newObject[properties[cell]] = row[cell].children[0].checked;
                                    break;
                                case "SPAN":
                                    newObject[properties[cell]] = row[cell].innerText.trim();
                                    break;
                                default:
                                    newObject[properties[cell]] = row[cell].children[0].innerText.trim();
                                    break;
                            }
                        }
                    }
                }
                newObject.html = rowparent;
                list.push(newObject);

            }
        }
        return list;
    };
    emptyObject(attributes) {
        let object = {};
        if (!attributes)
            attributes = Object.getOwnPropertyNames(this.getList()[0]);
        for (let attribute in attributes) {
            object[attributes[attribute]] = "";
        }
        return object;
    };
    getAttributesFromHtml(headerRow) {
        if (headerRow.localName == "thead")
            headerRow = headerRow.children[0].cells;


        let headers = [];
        for (let entry in headerRow) {

            if (headerRow[entry].outerText !== undefined) {
                let string = headerRow[entry].outerText.trim();
                string = string.replace(/\s+/g, '');
                headers.push(string);

            }
        }
        return headers;
    };
}