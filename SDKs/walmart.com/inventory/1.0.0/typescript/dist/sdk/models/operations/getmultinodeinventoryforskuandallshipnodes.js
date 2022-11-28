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
var GetMultiNodeInventoryForSkuAndAllShipnodesPathParams = /** @class */ (function (_super) {
    __extends(GetMultiNodeInventoryForSkuAndAllShipnodesPathParams, _super);
    function GetMultiNodeInventoryForSkuAndAllShipnodesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sku" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForSkuAndAllShipnodesPathParams.prototype, "sku", void 0);
    return GetMultiNodeInventoryForSkuAndAllShipnodesPathParams;
}(SpeakeasyBase));
export { GetMultiNodeInventoryForSkuAndAllShipnodesPathParams };
var GetMultiNodeInventoryForSkuAndAllShipnodesQueryParams = /** @class */ (function (_super) {
    __extends(GetMultiNodeInventoryForSkuAndAllShipnodesQueryParams, _super);
    function GetMultiNodeInventoryForSkuAndAllShipnodesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=shipNode" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForSkuAndAllShipnodesQueryParams.prototype, "shipNode", void 0);
    return GetMultiNodeInventoryForSkuAndAllShipnodesQueryParams;
}(SpeakeasyBase));
export { GetMultiNodeInventoryForSkuAndAllShipnodesQueryParams };
var GetMultiNodeInventoryForSkuAndAllShipnodesHeaders = /** @class */ (function (_super) {
    __extends(GetMultiNodeInventoryForSkuAndAllShipnodesHeaders, _super);
    function GetMultiNodeInventoryForSkuAndAllShipnodesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForSkuAndAllShipnodesHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_CONSUMER.CHANNEL.TYPE" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForSkuAndAllShipnodesHeaders.prototype, "wmConsumerChannelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_QOS.CORRELATION_ID" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForSkuAndAllShipnodesHeaders.prototype, "wmQosCorrelationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SEC.ACCESS_TOKEN" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForSkuAndAllShipnodesHeaders.prototype, "wmSecAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SVC.NAME" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForSkuAndAllShipnodesHeaders.prototype, "wmSvcName", void 0);
    return GetMultiNodeInventoryForSkuAndAllShipnodesHeaders;
}(SpeakeasyBase));
export { GetMultiNodeInventoryForSkuAndAllShipnodesHeaders };
export var GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQtyUnitEnum;
(function (GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQtyUnitEnum) {
    GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQtyUnitEnum["Each"] = "EACH";
})(GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQtyUnitEnum || (GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQtyUnitEnum = {}));
var GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQty = /** @class */ (function (_super) {
    __extends(GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQty, _super);
    function GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQty.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQty.prototype, "unit", void 0);
    return GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQty;
}(SpeakeasyBase));
export { GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQty };
export var GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCategoryEnum;
(function (GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCategoryEnum) {
    GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCategoryEnum["Application"] = "APPLICATION";
    GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCategoryEnum["System"] = "SYSTEM";
    GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCategoryEnum["Request"] = "REQUEST";
    GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCategoryEnum["Data"] = "DATA";
})(GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCategoryEnum || (GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCategoryEnum = {}));
var GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCauses = /** @class */ (function (_super) {
    __extends(GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCauses, _super);
    function GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCauses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCauses.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCauses.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCauses.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCauses.prototype, "type", void 0);
    return GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCauses;
}(SpeakeasyBase));
export { GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCauses };
export var GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsSeverityEnum;
(function (GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsSeverityEnum) {
    GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsSeverityEnum["Info"] = "INFO";
    GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsSeverityEnum["Warn"] = "WARN";
    GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsSeverityEnum["Error"] = "ERROR";
})(GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsSeverityEnum || (GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsSeverityEnum = {}));
// GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors
/**
 * Node Update Error description.
**/
var GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors = /** @class */ (function (_super) {
    __extends(GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors, _super);
    function GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=causes", elemType: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrorsCauses }),
        __metadata("design:type", Array)
    ], GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors.prototype, "causes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorIdentifiers" }),
        __metadata("design:type", Map)
    ], GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors.prototype, "errorIdentifiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=info" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors.prototype, "info", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors.prototype, "severity", void 0);
    return GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors;
}(SpeakeasyBase));
export { GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors };
export var GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQtyUnitEnum;
(function (GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQtyUnitEnum) {
    GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQtyUnitEnum["Each"] = "EACH";
})(GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQtyUnitEnum || (GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQtyUnitEnum = {}));
var GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQty = /** @class */ (function (_super) {
    __extends(GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQty, _super);
    function GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQty.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQty.prototype, "unit", void 0);
    return GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQty;
}(SpeakeasyBase));
export { GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQty };
var GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodes = /** @class */ (function (_super) {
    __extends(GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodes, _super);
    function GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availToSellQty" }),
        __metadata("design:type", GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesAvailToSellQty)
    ], GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodes.prototype, "availToSellQty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesErrors }),
        __metadata("design:type", Array)
    ], GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodes.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputQty" }),
        __metadata("design:type", GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodesInputQty)
    ], GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodes.prototype, "inputQty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipNode" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodes.prototype, "shipNode", void 0);
    return GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodes;
}(SpeakeasyBase));
export { GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodes };
var GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJson, _super);
    function GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodes", elemType: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonNodes }),
        __metadata("design:type", Array)
    ], GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJson.prototype, "nodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJson.prototype, "sku", void 0);
    return GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJson;
}(SpeakeasyBase));
export { GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJson };
var GetMultiNodeInventoryForSkuAndAllShipnodesRequest = /** @class */ (function (_super) {
    __extends(GetMultiNodeInventoryForSkuAndAllShipnodesRequest, _super);
    function GetMultiNodeInventoryForSkuAndAllShipnodesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMultiNodeInventoryForSkuAndAllShipnodesPathParams)
    ], GetMultiNodeInventoryForSkuAndAllShipnodesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMultiNodeInventoryForSkuAndAllShipnodesQueryParams)
    ], GetMultiNodeInventoryForSkuAndAllShipnodesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMultiNodeInventoryForSkuAndAllShipnodesHeaders)
    ], GetMultiNodeInventoryForSkuAndAllShipnodesRequest.prototype, "headers", void 0);
    return GetMultiNodeInventoryForSkuAndAllShipnodesRequest;
}(SpeakeasyBase));
export { GetMultiNodeInventoryForSkuAndAllShipnodesRequest };
var GetMultiNodeInventoryForSkuAndAllShipnodesResponse = /** @class */ (function (_super) {
    __extends(GetMultiNodeInventoryForSkuAndAllShipnodesResponse, _super);
    function GetMultiNodeInventoryForSkuAndAllShipnodesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForSkuAndAllShipnodesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMultiNodeInventoryForSkuAndAllShipnodesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJson)
    ], GetMultiNodeInventoryForSkuAndAllShipnodesResponse.prototype, "getMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJsonObject", void 0);
    return GetMultiNodeInventoryForSkuAndAllShipnodesResponse;
}(SpeakeasyBase));
export { GetMultiNodeInventoryForSkuAndAllShipnodesResponse };
