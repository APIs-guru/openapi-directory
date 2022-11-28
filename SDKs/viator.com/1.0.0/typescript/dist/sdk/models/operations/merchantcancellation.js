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
var MerchantCancellationHeaders = /** @class */ (function (_super) {
    __extends(MerchantCancellationHeaders, _super);
    function MerchantCancellationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], MerchantCancellationHeaders.prototype, "acceptLanguage", void 0);
    return MerchantCancellationHeaders;
}(SpeakeasyBase));
export { MerchantCancellationHeaders };
var MerchantCancellationRequestBodyCancelItems = /** @class */ (function (_super) {
    __extends(MerchantCancellationRequestBodyCancelItems, _super);
    function MerchantCancellationRequestBodyCancelItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancelCode" }),
        __metadata("design:type", String)
    ], MerchantCancellationRequestBodyCancelItems.prototype, "cancelCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancelDescription" }),
        __metadata("design:type", String)
    ], MerchantCancellationRequestBodyCancelItems.prototype, "cancelDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributorItemRef" }),
        __metadata("design:type", String)
    ], MerchantCancellationRequestBodyCancelItems.prototype, "distributorItemRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemId" }),
        __metadata("design:type", Number)
    ], MerchantCancellationRequestBodyCancelItems.prototype, "itemId", void 0);
    return MerchantCancellationRequestBodyCancelItems;
}(SpeakeasyBase));
export { MerchantCancellationRequestBodyCancelItems };
var MerchantCancellationRequestBody = /** @class */ (function (_super) {
    __extends(MerchantCancellationRequestBody, _super);
    function MerchantCancellationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancelItems", elemType: MerchantCancellationRequestBodyCancelItems }),
        __metadata("design:type", Array)
    ], MerchantCancellationRequestBody.prototype, "cancelItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributorRef" }),
        __metadata("design:type", String)
    ], MerchantCancellationRequestBody.prototype, "distributorRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itineraryId" }),
        __metadata("design:type", Number)
    ], MerchantCancellationRequestBody.prototype, "itineraryId", void 0);
    return MerchantCancellationRequestBody;
}(SpeakeasyBase));
export { MerchantCancellationRequestBody };
var MerchantCancellation200ApplicationJsonDataCancelItems = /** @class */ (function (_super) {
    __extends(MerchantCancellation200ApplicationJsonDataCancelItems, _super);
    function MerchantCancellation200ApplicationJsonDataCancelItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancellationResponseDescription" }),
        __metadata("design:type", String)
    ], MerchantCancellation200ApplicationJsonDataCancelItems.prototype, "cancellationResponseDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancellationResponseStatusCode" }),
        __metadata("design:type", String)
    ], MerchantCancellation200ApplicationJsonDataCancelItems.prototype, "cancellationResponseStatusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributorItemRef" }),
        __metadata("design:type", String)
    ], MerchantCancellation200ApplicationJsonDataCancelItems.prototype, "distributorItemRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemId" }),
        __metadata("design:type", String)
    ], MerchantCancellation200ApplicationJsonDataCancelItems.prototype, "itemId", void 0);
    return MerchantCancellation200ApplicationJsonDataCancelItems;
}(SpeakeasyBase));
export { MerchantCancellation200ApplicationJsonDataCancelItems };
var MerchantCancellation200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(MerchantCancellation200ApplicationJsonData, _super);
    function MerchantCancellation200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancelItems", elemType: MerchantCancellation200ApplicationJsonDataCancelItems }),
        __metadata("design:type", Array)
    ], MerchantCancellation200ApplicationJsonData.prototype, "cancelItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributorRef" }),
        __metadata("design:type", String)
    ], MerchantCancellation200ApplicationJsonData.prototype, "distributorRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itineraryId" }),
        __metadata("design:type", Number)
    ], MerchantCancellation200ApplicationJsonData.prototype, "itineraryId", void 0);
    return MerchantCancellation200ApplicationJsonData;
}(SpeakeasyBase));
export { MerchantCancellation200ApplicationJsonData };
var MerchantCancellation200ApplicationJson = /** @class */ (function (_super) {
    __extends(MerchantCancellation200ApplicationJson, _super);
    function MerchantCancellation200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", MerchantCancellation200ApplicationJsonData)
    ], MerchantCancellation200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateStamp" }),
        __metadata("design:type", String)
    ], MerchantCancellation200ApplicationJson.prototype, "dateStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCodes" }),
        __metadata("design:type", Array)
    ], MerchantCancellation200ApplicationJson.prototype, "errorCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", Array)
    ], MerchantCancellation200ApplicationJson.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessageText" }),
        __metadata("design:type", String)
    ], MerchantCancellation200ApplicationJson.prototype, "errorMessageText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorName" }),
        __metadata("design:type", String)
    ], MerchantCancellation200ApplicationJson.prototype, "errorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorReference" }),
        __metadata("design:type", String)
    ], MerchantCancellation200ApplicationJson.prototype, "errorReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorType" }),
        __metadata("design:type", String)
    ], MerchantCancellation200ApplicationJson.prototype, "errorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraInfo" }),
        __metadata("design:type", Map)
    ], MerchantCancellation200ApplicationJson.prototype, "extraInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraObject" }),
        __metadata("design:type", Map)
    ], MerchantCancellation200ApplicationJson.prototype, "extraObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], MerchantCancellation200ApplicationJson.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], MerchantCancellation200ApplicationJson.prototype, "totalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmid" }),
        __metadata("design:type", String)
    ], MerchantCancellation200ApplicationJson.prototype, "vmid", void 0);
    return MerchantCancellation200ApplicationJson;
}(SpeakeasyBase));
export { MerchantCancellation200ApplicationJson };
var MerchantCancellation400ApplicationJsonData = /** @class */ (function (_super) {
    __extends(MerchantCancellation400ApplicationJsonData, _super);
    function MerchantCancellation400ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancellationResponseDescription" }),
        __metadata("design:type", String)
    ], MerchantCancellation400ApplicationJsonData.prototype, "cancellationResponseDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancellationResponseStatusCode" }),
        __metadata("design:type", String)
    ], MerchantCancellation400ApplicationJsonData.prototype, "cancellationResponseStatusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributorItemRef" }),
        __metadata("design:type", String)
    ], MerchantCancellation400ApplicationJsonData.prototype, "distributorItemRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemId" }),
        __metadata("design:type", String)
    ], MerchantCancellation400ApplicationJsonData.prototype, "itemId", void 0);
    return MerchantCancellation400ApplicationJsonData;
}(SpeakeasyBase));
export { MerchantCancellation400ApplicationJsonData };
var MerchantCancellation400ApplicationJson = /** @class */ (function (_super) {
    __extends(MerchantCancellation400ApplicationJson, _super);
    function MerchantCancellation400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", MerchantCancellation400ApplicationJsonData)
    ], MerchantCancellation400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateStamp" }),
        __metadata("design:type", String)
    ], MerchantCancellation400ApplicationJson.prototype, "dateStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCodes" }),
        __metadata("design:type", Array)
    ], MerchantCancellation400ApplicationJson.prototype, "errorCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", Array)
    ], MerchantCancellation400ApplicationJson.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessageText" }),
        __metadata("design:type", String)
    ], MerchantCancellation400ApplicationJson.prototype, "errorMessageText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorName" }),
        __metadata("design:type", String)
    ], MerchantCancellation400ApplicationJson.prototype, "errorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorReference" }),
        __metadata("design:type", String)
    ], MerchantCancellation400ApplicationJson.prototype, "errorReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorType" }),
        __metadata("design:type", String)
    ], MerchantCancellation400ApplicationJson.prototype, "errorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraInfo" }),
        __metadata("design:type", Map)
    ], MerchantCancellation400ApplicationJson.prototype, "extraInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraObject" }),
        __metadata("design:type", Map)
    ], MerchantCancellation400ApplicationJson.prototype, "extraObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], MerchantCancellation400ApplicationJson.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], MerchantCancellation400ApplicationJson.prototype, "totalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmid" }),
        __metadata("design:type", String)
    ], MerchantCancellation400ApplicationJson.prototype, "vmid", void 0);
    return MerchantCancellation400ApplicationJson;
}(SpeakeasyBase));
export { MerchantCancellation400ApplicationJson };
var MerchantCancellationRequest = /** @class */ (function (_super) {
    __extends(MerchantCancellationRequest, _super);
    function MerchantCancellationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MerchantCancellationHeaders)
    ], MerchantCancellationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", MerchantCancellationRequestBody)
    ], MerchantCancellationRequest.prototype, "request", void 0);
    return MerchantCancellationRequest;
}(SpeakeasyBase));
export { MerchantCancellationRequest };
var MerchantCancellationResponse = /** @class */ (function (_super) {
    __extends(MerchantCancellationResponse, _super);
    function MerchantCancellationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MerchantCancellationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MerchantCancellationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MerchantCancellation200ApplicationJson)
    ], MerchantCancellationResponse.prototype, "merchantCancellation200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MerchantCancellation400ApplicationJson)
    ], MerchantCancellationResponse.prototype, "merchantCancellation400ApplicationJsonObject", void 0);
    return MerchantCancellationResponse;
}(SpeakeasyBase));
export { MerchantCancellationResponse };
