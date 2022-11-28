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
import * as shared from "../shared";
var TaxonomyDestinationsHeaders = /** @class */ (function (_super) {
    __extends(TaxonomyDestinationsHeaders, _super);
    function TaxonomyDestinationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], TaxonomyDestinationsHeaders.prototype, "acceptLanguage", void 0);
    return TaxonomyDestinationsHeaders;
}(SpeakeasyBase));
export { TaxonomyDestinationsHeaders };
var TaxonomyDestinations200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(TaxonomyDestinations200ApplicationJsonData, _super);
    function TaxonomyDestinations200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultCurrencyCode" }),
        __metadata("design:type", String)
    ], TaxonomyDestinations200ApplicationJsonData.prototype, "defaultCurrencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationId" }),
        __metadata("design:type", Number)
    ], TaxonomyDestinations200ApplicationJsonData.prototype, "destinationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationName" }),
        __metadata("design:type", String)
    ], TaxonomyDestinations200ApplicationJsonData.prototype, "destinationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationType" }),
        __metadata("design:type", String)
    ], TaxonomyDestinations200ApplicationJsonData.prototype, "destinationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationUrlName" }),
        __metadata("design:type", String)
    ], TaxonomyDestinations200ApplicationJsonData.prototype, "destinationUrlName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iataCode" }),
        __metadata("design:type", String)
    ], TaxonomyDestinations200ApplicationJsonData.prototype, "iataCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], TaxonomyDestinations200ApplicationJsonData.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], TaxonomyDestinations200ApplicationJsonData.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lookupId" }),
        __metadata("design:type", String)
    ], TaxonomyDestinations200ApplicationJsonData.prototype, "lookupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentId" }),
        __metadata("design:type", Number)
    ], TaxonomyDestinations200ApplicationJsonData.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selectable" }),
        __metadata("design:type", Boolean)
    ], TaxonomyDestinations200ApplicationJsonData.prototype, "selectable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], TaxonomyDestinations200ApplicationJsonData.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], TaxonomyDestinations200ApplicationJsonData.prototype, "timeZone", void 0);
    return TaxonomyDestinations200ApplicationJsonData;
}(SpeakeasyBase));
export { TaxonomyDestinations200ApplicationJsonData };
var TaxonomyDestinations200ApplicationJson = /** @class */ (function (_super) {
    __extends(TaxonomyDestinations200ApplicationJson, _super);
    function TaxonomyDestinations200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: TaxonomyDestinations200ApplicationJsonData }),
        __metadata("design:type", Array)
    ], TaxonomyDestinations200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateStamp" }),
        __metadata("design:type", String)
    ], TaxonomyDestinations200ApplicationJson.prototype, "dateStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCodes" }),
        __metadata("design:type", Array)
    ], TaxonomyDestinations200ApplicationJson.prototype, "errorCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", Array)
    ], TaxonomyDestinations200ApplicationJson.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessageText" }),
        __metadata("design:type", String)
    ], TaxonomyDestinations200ApplicationJson.prototype, "errorMessageText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorName" }),
        __metadata("design:type", String)
    ], TaxonomyDestinations200ApplicationJson.prototype, "errorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorReference" }),
        __metadata("design:type", String)
    ], TaxonomyDestinations200ApplicationJson.prototype, "errorReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorType" }),
        __metadata("design:type", String)
    ], TaxonomyDestinations200ApplicationJson.prototype, "errorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraInfo" }),
        __metadata("design:type", Map)
    ], TaxonomyDestinations200ApplicationJson.prototype, "extraInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraObject" }),
        __metadata("design:type", Map)
    ], TaxonomyDestinations200ApplicationJson.prototype, "extraObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], TaxonomyDestinations200ApplicationJson.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], TaxonomyDestinations200ApplicationJson.prototype, "totalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmid" }),
        __metadata("design:type", String)
    ], TaxonomyDestinations200ApplicationJson.prototype, "vmid", void 0);
    return TaxonomyDestinations200ApplicationJson;
}(SpeakeasyBase));
export { TaxonomyDestinations200ApplicationJson };
var TaxonomyDestinationsRequest = /** @class */ (function (_super) {
    __extends(TaxonomyDestinationsRequest, _super);
    function TaxonomyDestinationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TaxonomyDestinationsHeaders)
    ], TaxonomyDestinationsRequest.prototype, "headers", void 0);
    return TaxonomyDestinationsRequest;
}(SpeakeasyBase));
export { TaxonomyDestinationsRequest };
var TaxonomyDestinationsResponse = /** @class */ (function (_super) {
    __extends(TaxonomyDestinationsResponse, _super);
    function TaxonomyDestinationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TaxonomyDestinationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TaxonomyDestinationsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TaxonomyDestinations200ApplicationJson)
    ], TaxonomyDestinationsResponse.prototype, "taxonomyDestinations200ApplicationJsonObject", void 0);
    return TaxonomyDestinationsResponse;
}(SpeakeasyBase));
export { TaxonomyDestinationsResponse };
