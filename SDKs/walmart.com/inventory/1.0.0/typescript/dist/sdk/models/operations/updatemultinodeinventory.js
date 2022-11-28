var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
var UpdateMultiNodeInventoryPathParams = /** @class */ (function (_super) {
    __extends(UpdateMultiNodeInventoryPathParams, _super);
    function UpdateMultiNodeInventoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sku" }),
        __metadata("design:type", String)
    ], UpdateMultiNodeInventoryPathParams.prototype, "sku", void 0);
    return UpdateMultiNodeInventoryPathParams;
}(SpeakeasyBase));
export { UpdateMultiNodeInventoryPathParams };
var UpdateMultiNodeInventoryHeaders = /** @class */ (function (_super) {
    __extends(UpdateMultiNodeInventoryHeaders, _super);
    function UpdateMultiNodeInventoryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], UpdateMultiNodeInventoryHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_CONSUMER.CHANNEL.TYPE" }),
        __metadata("design:type", String)
    ], UpdateMultiNodeInventoryHeaders.prototype, "wmConsumerChannelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_QOS.CORRELATION_ID" }),
        __metadata("design:type", String)
    ], UpdateMultiNodeInventoryHeaders.prototype, "wmQosCorrelationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SEC.ACCESS_TOKEN" }),
        __metadata("design:type", String)
    ], UpdateMultiNodeInventoryHeaders.prototype, "wmSecAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SVC.NAME" }),
        __metadata("design:type", String)
    ], UpdateMultiNodeInventoryHeaders.prototype, "wmSvcName", void 0);
    return UpdateMultiNodeInventoryHeaders;
}(SpeakeasyBase));
export { UpdateMultiNodeInventoryHeaders };
export var UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum;
(function (UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum) {
    UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum["Each"] = "EACH";
})(UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum || (UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQtyUnitEnum = {}));
var UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty = /** @class */ (function (_super) {
    __extends(UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty, _super);
    function UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty.prototype, "unit", void 0);
    return UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty;
}(SpeakeasyBase));
export { UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty };
var UpdateMultiNodeInventoryRequestBodyInventoriesNodes = /** @class */ (function (_super) {
    __extends(UpdateMultiNodeInventoryRequestBodyInventoriesNodes, _super);
    function UpdateMultiNodeInventoryRequestBodyInventoriesNodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputQty" }),
        __metadata("design:type", UpdateMultiNodeInventoryRequestBodyInventoriesNodesInputQty)
    ], UpdateMultiNodeInventoryRequestBodyInventoriesNodes.prototype, "inputQty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipNode" }),
        __metadata("design:type", String)
    ], UpdateMultiNodeInventoryRequestBodyInventoriesNodes.prototype, "shipNode", void 0);
    return UpdateMultiNodeInventoryRequestBodyInventoriesNodes;
}(SpeakeasyBase));
export { UpdateMultiNodeInventoryRequestBodyInventoriesNodes };
var UpdateMultiNodeInventoryRequestBodyInventories = /** @class */ (function (_super) {
    __extends(UpdateMultiNodeInventoryRequestBodyInventories, _super);
    function UpdateMultiNodeInventoryRequestBodyInventories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodes", elemType: UpdateMultiNodeInventoryRequestBodyInventoriesNodes }),
        __metadata("design:type", Array)
    ], UpdateMultiNodeInventoryRequestBodyInventories.prototype, "nodes", void 0);
    return UpdateMultiNodeInventoryRequestBodyInventories;
}(SpeakeasyBase));
export { UpdateMultiNodeInventoryRequestBodyInventories };
var UpdateMultiNodeInventoryRequestBody = /** @class */ (function (_super) {
    __extends(UpdateMultiNodeInventoryRequestBody, _super);
    function UpdateMultiNodeInventoryRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventories" }),
        __metadata("design:type", UpdateMultiNodeInventoryRequestBodyInventories)
    ], UpdateMultiNodeInventoryRequestBody.prototype, "inventories", void 0);
    return UpdateMultiNodeInventoryRequestBody;
}(SpeakeasyBase));
export { UpdateMultiNodeInventoryRequestBody };
export var UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCategoryEnum;
(function (UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCategoryEnum) {
    UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCategoryEnum["Application"] = "APPLICATION";
    UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCategoryEnum["System"] = "SYSTEM";
    UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCategoryEnum["Request"] = "REQUEST";
    UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCategoryEnum["Data"] = "DATA";
})(UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCategoryEnum || (UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCategoryEnum = {}));
var UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCauses = /** @class */ (function (_super) {
    __extends(UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCauses, _super);
    function UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCauses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCauses.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCauses.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCauses.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCauses.prototype, "type", void 0);
    return UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCauses;
}(SpeakeasyBase));
export { UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCauses };
export var UpdateMultiNodeInventory200ApplicationJsonNodesErrorsSeverityEnum;
(function (UpdateMultiNodeInventory200ApplicationJsonNodesErrorsSeverityEnum) {
    UpdateMultiNodeInventory200ApplicationJsonNodesErrorsSeverityEnum["Info"] = "INFO";
    UpdateMultiNodeInventory200ApplicationJsonNodesErrorsSeverityEnum["Warn"] = "WARN";
    UpdateMultiNodeInventory200ApplicationJsonNodesErrorsSeverityEnum["Error"] = "ERROR";
})(UpdateMultiNodeInventory200ApplicationJsonNodesErrorsSeverityEnum || (UpdateMultiNodeInventory200ApplicationJsonNodesErrorsSeverityEnum = {}));
// UpdateMultiNodeInventory200ApplicationJsonNodesErrors
/**
 * Node Update Error description.
**/
var UpdateMultiNodeInventory200ApplicationJsonNodesErrors = /** @class */ (function (_super) {
    __extends(UpdateMultiNodeInventory200ApplicationJsonNodesErrors, _super);
    function UpdateMultiNodeInventory200ApplicationJsonNodesErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], UpdateMultiNodeInventory200ApplicationJsonNodesErrors.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=causes", elemType: UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCauses }),
        __metadata("design:type", Array)
    ], UpdateMultiNodeInventory200ApplicationJsonNodesErrors.prototype, "causes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], UpdateMultiNodeInventory200ApplicationJsonNodesErrors.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateMultiNodeInventory200ApplicationJsonNodesErrors.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorIdentifiers" }),
        __metadata("design:type", Map)
    ], UpdateMultiNodeInventory200ApplicationJsonNodesErrors.prototype, "errorIdentifiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], UpdateMultiNodeInventory200ApplicationJsonNodesErrors.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=info" }),
        __metadata("design:type", String)
    ], UpdateMultiNodeInventory200ApplicationJsonNodesErrors.prototype, "info", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], UpdateMultiNodeInventory200ApplicationJsonNodesErrors.prototype, "severity", void 0);
    return UpdateMultiNodeInventory200ApplicationJsonNodesErrors;
}(SpeakeasyBase));
export { UpdateMultiNodeInventory200ApplicationJsonNodesErrors };
var UpdateMultiNodeInventory200ApplicationJsonNodes = /** @class */ (function (_super) {
    __extends(UpdateMultiNodeInventory200ApplicationJsonNodes, _super);
    function UpdateMultiNodeInventory200ApplicationJsonNodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: UpdateMultiNodeInventory200ApplicationJsonNodesErrors }),
        __metadata("design:type", Array)
    ], UpdateMultiNodeInventory200ApplicationJsonNodes.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipNode" }),
        __metadata("design:type", String)
    ], UpdateMultiNodeInventory200ApplicationJsonNodes.prototype, "shipNode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UpdateMultiNodeInventory200ApplicationJsonNodes.prototype, "status", void 0);
    return UpdateMultiNodeInventory200ApplicationJsonNodes;
}(SpeakeasyBase));
export { UpdateMultiNodeInventory200ApplicationJsonNodes };
var UpdateMultiNodeInventory200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateMultiNodeInventory200ApplicationJson, _super);
    function UpdateMultiNodeInventory200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodes", elemType: UpdateMultiNodeInventory200ApplicationJsonNodes }),
        __metadata("design:type", Array)
    ], UpdateMultiNodeInventory200ApplicationJson.prototype, "nodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], UpdateMultiNodeInventory200ApplicationJson.prototype, "sku", void 0);
    return UpdateMultiNodeInventory200ApplicationJson;
}(SpeakeasyBase));
export { UpdateMultiNodeInventory200ApplicationJson };
var UpdateMultiNodeInventoryRequest = /** @class */ (function (_super) {
    __extends(UpdateMultiNodeInventoryRequest, _super);
    function UpdateMultiNodeInventoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateMultiNodeInventoryPathParams)
    ], UpdateMultiNodeInventoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateMultiNodeInventoryHeaders)
    ], UpdateMultiNodeInventoryRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateMultiNodeInventoryRequestBody)
    ], UpdateMultiNodeInventoryRequest.prototype, "request", void 0);
    return UpdateMultiNodeInventoryRequest;
}(SpeakeasyBase));
export { UpdateMultiNodeInventoryRequest };
var UpdateMultiNodeInventoryResponse = /** @class */ (function (_super) {
    __extends(UpdateMultiNodeInventoryResponse, _super);
    function UpdateMultiNodeInventoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateMultiNodeInventoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateMultiNodeInventoryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateMultiNodeInventory200ApplicationJson)
    ], UpdateMultiNodeInventoryResponse.prototype, "updateMultiNodeInventory200ApplicationJsonObject", void 0);
    return UpdateMultiNodeInventoryResponse;
}(SpeakeasyBase));
export { UpdateMultiNodeInventoryResponse };
