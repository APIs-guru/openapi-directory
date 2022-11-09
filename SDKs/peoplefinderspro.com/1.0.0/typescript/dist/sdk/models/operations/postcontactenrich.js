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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var PostContactEnrichHeaders = /** @class */ (function (_super) {
    __extends(PostContactEnrichHeaders, _super);
    function PostContactEnrichHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=galaxy-ap-name" }),
        __metadata("design:type", String)
    ], PostContactEnrichHeaders.prototype, "galaxyApName", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=galaxy-ap-password" }),
        __metadata("design:type", String)
    ], PostContactEnrichHeaders.prototype, "galaxyApPassword", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=galaxy-search-type" }),
        __metadata("design:type", String)
    ], PostContactEnrichHeaders.prototype, "galaxySearchType", void 0);
    return PostContactEnrichHeaders;
}(SpeakeasyBase));
export { PostContactEnrichHeaders };
var PostContactEnrichRequestBodyAddress = /** @class */ (function (_super) {
    __extends(PostContactEnrichRequestBodyAddress, _super);
    function PostContactEnrichRequestBodyAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=addressLine1" }),
        __metadata("design:type", String)
    ], PostContactEnrichRequestBodyAddress.prototype, "addressLine1", void 0);
    __decorate([
        Metadata({ data: "json, name=addressLine2" }),
        __metadata("design:type", String)
    ], PostContactEnrichRequestBodyAddress.prototype, "addressLine2", void 0);
    return PostContactEnrichRequestBodyAddress;
}(SpeakeasyBase));
export { PostContactEnrichRequestBodyAddress };
var PostContactEnrichRequestBody = /** @class */ (function (_super) {
    __extends(PostContactEnrichRequestBody, _super);
    function PostContactEnrichRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Address" }),
        __metadata("design:type", PostContactEnrichRequestBodyAddress)
    ], PostContactEnrichRequestBody.prototype, "address", void 0);
    __decorate([
        Metadata({ data: "json, name=Age" }),
        __metadata("design:type", Number)
    ], PostContactEnrichRequestBody.prototype, "age", void 0);
    __decorate([
        Metadata({ data: "json, name=Dob" }),
        __metadata("design:type", String)
    ], PostContactEnrichRequestBody.prototype, "dob", void 0);
    __decorate([
        Metadata({ data: "json, name=Email" }),
        __metadata("design:type", String)
    ], PostContactEnrichRequestBody.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "json, name=FirstName" }),
        __metadata("design:type", String)
    ], PostContactEnrichRequestBody.prototype, "firstName", void 0);
    __decorate([
        Metadata({ data: "json, name=LastName" }),
        __metadata("design:type", String)
    ], PostContactEnrichRequestBody.prototype, "lastName", void 0);
    __decorate([
        Metadata({ data: "json, name=MiddleName" }),
        __metadata("design:type", String)
    ], PostContactEnrichRequestBody.prototype, "middleName", void 0);
    __decorate([
        Metadata({ data: "json, name=PhoneNumber" }),
        __metadata("design:type", String)
    ], PostContactEnrichRequestBody.prototype, "phoneNumber", void 0);
    return PostContactEnrichRequestBody;
}(SpeakeasyBase));
export { PostContactEnrichRequestBody };
var PostContactEnrichRequest = /** @class */ (function (_super) {
    __extends(PostContactEnrichRequest, _super);
    function PostContactEnrichRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostContactEnrichHeaders)
    ], PostContactEnrichRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostContactEnrichRequestBody)
    ], PostContactEnrichRequest.prototype, "request", void 0);
    return PostContactEnrichRequest;
}(SpeakeasyBase));
export { PostContactEnrichRequest };
var PostContactEnrichResponse = /** @class */ (function (_super) {
    __extends(PostContactEnrichResponse, _super);
    function PostContactEnrichResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostContactEnrichResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostContactEnrichResponse.prototype, "statusCode", void 0);
    return PostContactEnrichResponse;
}(SpeakeasyBase));
export { PostContactEnrichResponse };
