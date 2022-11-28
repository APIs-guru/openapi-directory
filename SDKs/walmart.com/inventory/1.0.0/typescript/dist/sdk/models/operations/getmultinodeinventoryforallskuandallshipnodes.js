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
var GetMultiNodeInventoryForAllSkuAndAllShipNodesQueryParams = /** @class */ (function (_super) {
    __extends(GetMultiNodeInventoryForAllSkuAndAllShipNodesQueryParams, _super);
    function GetMultiNodeInventoryForAllSkuAndAllShipNodesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextCursor" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodesQueryParams.prototype, "nextCursor", void 0);
    return GetMultiNodeInventoryForAllSkuAndAllShipNodesQueryParams;
}(SpeakeasyBase));
export { GetMultiNodeInventoryForAllSkuAndAllShipNodesQueryParams };
var GetMultiNodeInventoryForAllSkuAndAllShipNodesHeaders = /** @class */ (function (_super) {
    __extends(GetMultiNodeInventoryForAllSkuAndAllShipNodesHeaders, _super);
    function GetMultiNodeInventoryForAllSkuAndAllShipNodesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodesHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_CONSUMER.CHANNEL.TYPE" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodesHeaders.prototype, "wmConsumerChannelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_QOS.CORRELATION_ID" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodesHeaders.prototype, "wmQosCorrelationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SEC.ACCESS_TOKEN" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodesHeaders.prototype, "wmSecAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SVC.NAME" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodesHeaders.prototype, "wmSvcName", void 0);
    return GetMultiNodeInventoryForAllSkuAndAllShipNodesHeaders;
}(SpeakeasyBase));
export { GetMultiNodeInventoryForAllSkuAndAllShipNodesHeaders };
export var GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQtyUnitEnum;
(function (GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQtyUnitEnum) {
    GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQtyUnitEnum["Each"] = "EACH";
})(GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQtyUnitEnum || (GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQtyUnitEnum = {}));
var GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQty = /** @class */ (function (_super) {
    __extends(GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQty, _super);
    function GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQty.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQty.prototype, "unit", void 0);
    return GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQty;
}(SpeakeasyBase));
export { GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQty };
export var GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQtyUnitEnum;
(function (GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQtyUnitEnum) {
    GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQtyUnitEnum["Each"] = "EACH";
})(GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQtyUnitEnum || (GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQtyUnitEnum = {}));
var GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQty = /** @class */ (function (_super) {
    __extends(GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQty, _super);
    function GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQty.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQty.prototype, "unit", void 0);
    return GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQty;
}(SpeakeasyBase));
export { GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQty };
var GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodes = /** @class */ (function (_super) {
    __extends(GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodes, _super);
    function GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availToSellQty" }),
        __metadata("design:type", GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesAvailToSellQty)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodes.prototype, "availToSellQty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputQty" }),
        __metadata("design:type", GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodesInputQty)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodes.prototype, "inputQty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipNode" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodes.prototype, "shipNode", void 0);
    return GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodes;
}(SpeakeasyBase));
export { GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodes };
var GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventories = /** @class */ (function (_super) {
    __extends(GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventories, _super);
    function GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodes", elemType: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventoriesNodes }),
        __metadata("design:type", Array)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventories.prototype, "nodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventories.prototype, "sku", void 0);
    return GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventories;
}(SpeakeasyBase));
export { GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventories };
var GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElements = /** @class */ (function (_super) {
    __extends(GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElements, _super);
    function GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElements() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventories", elemType: GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElementsInventories }),
        __metadata("design:type", Array)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElements.prototype, "inventories", void 0);
    return GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElements;
}(SpeakeasyBase));
export { GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElements };
var GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonMeta, _super);
    function GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextCursor" }),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonMeta.prototype, "nextCursor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonMeta.prototype, "totalCount", void 0);
    return GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonMeta;
}(SpeakeasyBase));
export { GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonMeta };
var GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJson, _super);
    function GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=elements" }),
        __metadata("design:type", GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonElements)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJson.prototype, "elements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonMeta)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJson.prototype, "meta", void 0);
    return GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJson;
}(SpeakeasyBase));
export { GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJson };
var GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest = /** @class */ (function (_super) {
    __extends(GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest, _super);
    function GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMultiNodeInventoryForAllSkuAndAllShipNodesQueryParams)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMultiNodeInventoryForAllSkuAndAllShipNodesHeaders)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest.prototype, "headers", void 0);
    return GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest;
}(SpeakeasyBase));
export { GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest };
var GetMultiNodeInventoryForAllSkuAndAllShipNodesResponse = /** @class */ (function (_super) {
    __extends(GetMultiNodeInventoryForAllSkuAndAllShipNodesResponse, _super);
    function GetMultiNodeInventoryForAllSkuAndAllShipNodesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJson)
    ], GetMultiNodeInventoryForAllSkuAndAllShipNodesResponse.prototype, "getMultiNodeInventoryForAllSkuAndAllShipNodes200ApplicationJsonObject", void 0);
    return GetMultiNodeInventoryForAllSkuAndAllShipNodesResponse;
}(SpeakeasyBase));
export { GetMultiNodeInventoryForAllSkuAndAllShipNodesResponse };
