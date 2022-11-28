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
var GetWfsInventoryQueryParams = /** @class */ (function (_super) {
    __extends(GetWfsInventoryQueryParams, _super);
    function GetWfsInventoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromModifiedDate" }),
        __metadata("design:type", String)
    ], GetWfsInventoryQueryParams.prototype, "fromModifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], GetWfsInventoryQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetWfsInventoryQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sku" }),
        __metadata("design:type", String)
    ], GetWfsInventoryQueryParams.prototype, "sku", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toModifiedDate" }),
        __metadata("design:type", String)
    ], GetWfsInventoryQueryParams.prototype, "toModifiedDate", void 0);
    return GetWfsInventoryQueryParams;
}(SpeakeasyBase));
export { GetWfsInventoryQueryParams };
var GetWfsInventoryHeaders = /** @class */ (function (_super) {
    __extends(GetWfsInventoryHeaders, _super);
    function GetWfsInventoryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetWfsInventoryHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_CONSUMER.CHANNEL.TYPE" }),
        __metadata("design:type", String)
    ], GetWfsInventoryHeaders.prototype, "wmConsumerChannelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_QOS.CORRELATION_ID" }),
        __metadata("design:type", String)
    ], GetWfsInventoryHeaders.prototype, "wmQosCorrelationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SEC.ACCESS_TOKEN" }),
        __metadata("design:type", String)
    ], GetWfsInventoryHeaders.prototype, "wmSecAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SVC.NAME" }),
        __metadata("design:type", String)
    ], GetWfsInventoryHeaders.prototype, "wmSvcName", void 0);
    return GetWfsInventoryHeaders;
}(SpeakeasyBase));
export { GetWfsInventoryHeaders };
var GetWfsInventory200ApplicationJsonHeaders = /** @class */ (function (_super) {
    __extends(GetWfsInventory200ApplicationJsonHeaders, _super);
    function GetWfsInventory200ApplicationJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], GetWfsInventory200ApplicationJsonHeaders.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], GetWfsInventory200ApplicationJsonHeaders.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], GetWfsInventory200ApplicationJsonHeaders.prototype, "totalCount", void 0);
    return GetWfsInventory200ApplicationJsonHeaders;
}(SpeakeasyBase));
export { GetWfsInventory200ApplicationJsonHeaders };
var GetWfsInventory200ApplicationJsonPayloadInventoryShipNodes = /** @class */ (function (_super) {
    __extends(GetWfsInventory200ApplicationJsonPayloadInventoryShipNodes, _super);
    function GetWfsInventory200ApplicationJsonPayloadInventoryShipNodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availToSellQty" }),
        __metadata("design:type", Number)
    ], GetWfsInventory200ApplicationJsonPayloadInventoryShipNodes.prototype, "availToSellQty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modifiedDate" }),
        __metadata("design:type", String)
    ], GetWfsInventory200ApplicationJsonPayloadInventoryShipNodes.prototype, "modifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onHandQty" }),
        __metadata("design:type", Number)
    ], GetWfsInventory200ApplicationJsonPayloadInventoryShipNodes.prototype, "onHandQty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipNodeType" }),
        __metadata("design:type", String)
    ], GetWfsInventory200ApplicationJsonPayloadInventoryShipNodes.prototype, "shipNodeType", void 0);
    return GetWfsInventory200ApplicationJsonPayloadInventoryShipNodes;
}(SpeakeasyBase));
export { GetWfsInventory200ApplicationJsonPayloadInventoryShipNodes };
var GetWfsInventory200ApplicationJsonPayloadInventory = /** @class */ (function (_super) {
    __extends(GetWfsInventory200ApplicationJsonPayloadInventory, _super);
    function GetWfsInventory200ApplicationJsonPayloadInventory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipNodes", elemType: GetWfsInventory200ApplicationJsonPayloadInventoryShipNodes }),
        __metadata("design:type", Array)
    ], GetWfsInventory200ApplicationJsonPayloadInventory.prototype, "shipNodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], GetWfsInventory200ApplicationJsonPayloadInventory.prototype, "sku", void 0);
    return GetWfsInventory200ApplicationJsonPayloadInventory;
}(SpeakeasyBase));
export { GetWfsInventory200ApplicationJsonPayloadInventory };
var GetWfsInventory200ApplicationJsonPayload = /** @class */ (function (_super) {
    __extends(GetWfsInventory200ApplicationJsonPayload, _super);
    function GetWfsInventory200ApplicationJsonPayload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventory", elemType: GetWfsInventory200ApplicationJsonPayloadInventory }),
        __metadata("design:type", Array)
    ], GetWfsInventory200ApplicationJsonPayload.prototype, "inventory", void 0);
    return GetWfsInventory200ApplicationJsonPayload;
}(SpeakeasyBase));
export { GetWfsInventory200ApplicationJsonPayload };
var GetWfsInventory200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetWfsInventory200ApplicationJson, _super);
    function GetWfsInventory200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", GetWfsInventory200ApplicationJsonHeaders)
    ], GetWfsInventory200ApplicationJson.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payload" }),
        __metadata("design:type", GetWfsInventory200ApplicationJsonPayload)
    ], GetWfsInventory200ApplicationJson.prototype, "payload", void 0);
    return GetWfsInventory200ApplicationJson;
}(SpeakeasyBase));
export { GetWfsInventory200ApplicationJson };
var GetWfsInventoryRequest = /** @class */ (function (_super) {
    __extends(GetWfsInventoryRequest, _super);
    function GetWfsInventoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWfsInventoryQueryParams)
    ], GetWfsInventoryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWfsInventoryHeaders)
    ], GetWfsInventoryRequest.prototype, "headers", void 0);
    return GetWfsInventoryRequest;
}(SpeakeasyBase));
export { GetWfsInventoryRequest };
var GetWfsInventoryResponse = /** @class */ (function (_super) {
    __extends(GetWfsInventoryResponse, _super);
    function GetWfsInventoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetWfsInventoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetWfsInventoryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWfsInventory200ApplicationJson)
    ], GetWfsInventoryResponse.prototype, "getWfsInventory200ApplicationJsonObject", void 0);
    return GetWfsInventoryResponse;
}(SpeakeasyBase));
export { GetWfsInventoryResponse };
