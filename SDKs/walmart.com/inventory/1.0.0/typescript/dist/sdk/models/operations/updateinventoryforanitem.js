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
var UpdateInventoryForAnItemQueryParams = /** @class */ (function (_super) {
    __extends(UpdateInventoryForAnItemQueryParams, _super);
    function UpdateInventoryForAnItemQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=shipNode" }),
        __metadata("design:type", String)
    ], UpdateInventoryForAnItemQueryParams.prototype, "shipNode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sku" }),
        __metadata("design:type", String)
    ], UpdateInventoryForAnItemQueryParams.prototype, "sku", void 0);
    return UpdateInventoryForAnItemQueryParams;
}(SpeakeasyBase));
export { UpdateInventoryForAnItemQueryParams };
var UpdateInventoryForAnItemHeaders = /** @class */ (function (_super) {
    __extends(UpdateInventoryForAnItemHeaders, _super);
    function UpdateInventoryForAnItemHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], UpdateInventoryForAnItemHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_CONSUMER.CHANNEL.TYPE" }),
        __metadata("design:type", String)
    ], UpdateInventoryForAnItemHeaders.prototype, "wmConsumerChannelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_QOS.CORRELATION_ID" }),
        __metadata("design:type", String)
    ], UpdateInventoryForAnItemHeaders.prototype, "wmQosCorrelationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SEC.ACCESS_TOKEN" }),
        __metadata("design:type", String)
    ], UpdateInventoryForAnItemHeaders.prototype, "wmSecAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SVC.NAME" }),
        __metadata("design:type", String)
    ], UpdateInventoryForAnItemHeaders.prototype, "wmSvcName", void 0);
    return UpdateInventoryForAnItemHeaders;
}(SpeakeasyBase));
export { UpdateInventoryForAnItemHeaders };
export var UpdateInventoryForAnItemApplicationJsonQuantityUnitEnum;
(function (UpdateInventoryForAnItemApplicationJsonQuantityUnitEnum) {
    UpdateInventoryForAnItemApplicationJsonQuantityUnitEnum["Each"] = "EACH";
})(UpdateInventoryForAnItemApplicationJsonQuantityUnitEnum || (UpdateInventoryForAnItemApplicationJsonQuantityUnitEnum = {}));
var UpdateInventoryForAnItemApplicationJsonQuantity = /** @class */ (function (_super) {
    __extends(UpdateInventoryForAnItemApplicationJsonQuantity, _super);
    function UpdateInventoryForAnItemApplicationJsonQuantity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], UpdateInventoryForAnItemApplicationJsonQuantity.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], UpdateInventoryForAnItemApplicationJsonQuantity.prototype, "unit", void 0);
    return UpdateInventoryForAnItemApplicationJsonQuantity;
}(SpeakeasyBase));
export { UpdateInventoryForAnItemApplicationJsonQuantity };
var UpdateInventoryForAnItemApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateInventoryForAnItemApplicationJson, _super);
    function UpdateInventoryForAnItemApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", UpdateInventoryForAnItemApplicationJsonQuantity)
    ], UpdateInventoryForAnItemApplicationJson.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], UpdateInventoryForAnItemApplicationJson.prototype, "sku", void 0);
    return UpdateInventoryForAnItemApplicationJson;
}(SpeakeasyBase));
export { UpdateInventoryForAnItemApplicationJson };
var UpdateInventoryForAnItemRequests = /** @class */ (function (_super) {
    __extends(UpdateInventoryForAnItemRequests, _super);
    function UpdateInventoryForAnItemRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], UpdateInventoryForAnItemRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateInventoryForAnItemApplicationJson)
    ], UpdateInventoryForAnItemRequests.prototype, "object", void 0);
    return UpdateInventoryForAnItemRequests;
}(SpeakeasyBase));
export { UpdateInventoryForAnItemRequests };
export var UpdateInventoryForAnItem200ApplicationJsonQuantityUnitEnum;
(function (UpdateInventoryForAnItem200ApplicationJsonQuantityUnitEnum) {
    UpdateInventoryForAnItem200ApplicationJsonQuantityUnitEnum["Each"] = "EACH";
})(UpdateInventoryForAnItem200ApplicationJsonQuantityUnitEnum || (UpdateInventoryForAnItem200ApplicationJsonQuantityUnitEnum = {}));
var UpdateInventoryForAnItem200ApplicationJsonQuantity = /** @class */ (function (_super) {
    __extends(UpdateInventoryForAnItem200ApplicationJsonQuantity, _super);
    function UpdateInventoryForAnItem200ApplicationJsonQuantity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], UpdateInventoryForAnItem200ApplicationJsonQuantity.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], UpdateInventoryForAnItem200ApplicationJsonQuantity.prototype, "unit", void 0);
    return UpdateInventoryForAnItem200ApplicationJsonQuantity;
}(SpeakeasyBase));
export { UpdateInventoryForAnItem200ApplicationJsonQuantity };
var UpdateInventoryForAnItem200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateInventoryForAnItem200ApplicationJson, _super);
    function UpdateInventoryForAnItem200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", UpdateInventoryForAnItem200ApplicationJsonQuantity)
    ], UpdateInventoryForAnItem200ApplicationJson.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], UpdateInventoryForAnItem200ApplicationJson.prototype, "sku", void 0);
    return UpdateInventoryForAnItem200ApplicationJson;
}(SpeakeasyBase));
export { UpdateInventoryForAnItem200ApplicationJson };
var UpdateInventoryForAnItemRequest = /** @class */ (function (_super) {
    __extends(UpdateInventoryForAnItemRequest, _super);
    function UpdateInventoryForAnItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateInventoryForAnItemQueryParams)
    ], UpdateInventoryForAnItemRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateInventoryForAnItemHeaders)
    ], UpdateInventoryForAnItemRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateInventoryForAnItemRequests)
    ], UpdateInventoryForAnItemRequest.prototype, "request", void 0);
    return UpdateInventoryForAnItemRequest;
}(SpeakeasyBase));
export { UpdateInventoryForAnItemRequest };
var UpdateInventoryForAnItemResponse = /** @class */ (function (_super) {
    __extends(UpdateInventoryForAnItemResponse, _super);
    function UpdateInventoryForAnItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UpdateInventoryForAnItemResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateInventoryForAnItemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateInventoryForAnItemResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateInventoryForAnItem200ApplicationJson)
    ], UpdateInventoryForAnItemResponse.prototype, "updateInventoryForAnItem200ApplicationJsonObject", void 0);
    return UpdateInventoryForAnItemResponse;
}(SpeakeasyBase));
export { UpdateInventoryForAnItemResponse };
