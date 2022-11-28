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
var SearchHeaders = /** @class */ (function (_super) {
    __extends(SearchHeaders, _super);
    function SearchHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-ap-name" }),
        __metadata("design:type", String)
    ], SearchHeaders.prototype, "galaxyApName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-ap-password" }),
        __metadata("design:type", String)
    ], SearchHeaders.prototype, "galaxyApPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=galaxy-search-type" }),
        __metadata("design:type", String)
    ], SearchHeaders.prototype, "galaxySearchType", void 0);
    return SearchHeaders;
}(SpeakeasyBase));
export { SearchHeaders };
var SearchRequestBodyAddress = /** @class */ (function (_super) {
    __extends(SearchRequestBodyAddress, _super);
    function SearchRequestBodyAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressLine1" }),
        __metadata("design:type", String)
    ], SearchRequestBodyAddress.prototype, "addressLine1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressLine2" }),
        __metadata("design:type", String)
    ], SearchRequestBodyAddress.prototype, "addressLine2", void 0);
    return SearchRequestBodyAddress;
}(SpeakeasyBase));
export { SearchRequestBodyAddress };
var SearchRequestBody = /** @class */ (function (_super) {
    __extends(SearchRequestBody, _super);
    function SearchRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address" }),
        __metadata("design:type", SearchRequestBodyAddress)
    ], SearchRequestBody.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Age" }),
        __metadata("design:type", Number)
    ], SearchRequestBody.prototype, "age", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Dob" }),
        __metadata("design:type", String)
    ], SearchRequestBody.prototype, "dob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Email" }),
        __metadata("design:type", String)
    ], SearchRequestBody.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstName" }),
        __metadata("design:type", String)
    ], SearchRequestBody.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastName" }),
        __metadata("design:type", String)
    ], SearchRequestBody.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MiddleName" }),
        __metadata("design:type", String)
    ], SearchRequestBody.prototype, "middleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PhoneNumber" }),
        __metadata("design:type", String)
    ], SearchRequestBody.prototype, "phoneNumber", void 0);
    return SearchRequestBody;
}(SpeakeasyBase));
export { SearchRequestBody };
var SearchRequest = /** @class */ (function (_super) {
    __extends(SearchRequest, _super);
    function SearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchHeaders)
    ], SearchRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SearchRequestBody)
    ], SearchRequest.prototype, "request", void 0);
    return SearchRequest;
}(SpeakeasyBase));
export { SearchRequest };
var SearchResponse = /** @class */ (function (_super) {
    __extends(SearchResponse, _super);
    function SearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchResponse.prototype, "statusCode", void 0);
    return SearchResponse;
}(SpeakeasyBase));
export { SearchResponse };
