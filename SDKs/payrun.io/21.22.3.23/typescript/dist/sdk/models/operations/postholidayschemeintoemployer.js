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
import * as shared from "../shared";
var PostHolidaySchemeIntoEmployerPathParams = /** @class */ (function (_super) {
    __extends(PostHolidaySchemeIntoEmployerPathParams, _super);
    function PostHolidaySchemeIntoEmployerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], PostHolidaySchemeIntoEmployerPathParams.prototype, "employerId", void 0);
    return PostHolidaySchemeIntoEmployerPathParams;
}(SpeakeasyBase));
export { PostHolidaySchemeIntoEmployerPathParams };
var PostHolidaySchemeIntoEmployerHeaders = /** @class */ (function (_super) {
    __extends(PostHolidaySchemeIntoEmployerHeaders, _super);
    function PostHolidaySchemeIntoEmployerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PostHolidaySchemeIntoEmployerHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostHolidaySchemeIntoEmployerHeaders.prototype, "authorization", void 0);
    return PostHolidaySchemeIntoEmployerHeaders;
}(SpeakeasyBase));
export { PostHolidaySchemeIntoEmployerHeaders };
var PostHolidaySchemeIntoEmployerRequest = /** @class */ (function (_super) {
    __extends(PostHolidaySchemeIntoEmployerRequest, _super);
    function PostHolidaySchemeIntoEmployerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostHolidaySchemeIntoEmployerPathParams)
    ], PostHolidaySchemeIntoEmployerRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostHolidaySchemeIntoEmployerHeaders)
    ], PostHolidaySchemeIntoEmployerRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.HolidayScheme)
    ], PostHolidaySchemeIntoEmployerRequest.prototype, "request", void 0);
    return PostHolidaySchemeIntoEmployerRequest;
}(SpeakeasyBase));
export { PostHolidaySchemeIntoEmployerRequest };
var PostHolidaySchemeIntoEmployerResponse = /** @class */ (function (_super) {
    __extends(PostHolidaySchemeIntoEmployerResponse, _super);
    function PostHolidaySchemeIntoEmployerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostHolidaySchemeIntoEmployerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], PostHolidaySchemeIntoEmployerResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Link)
    ], PostHolidaySchemeIntoEmployerResponse.prototype, "link", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostHolidaySchemeIntoEmployerResponse.prototype, "statusCode", void 0);
    return PostHolidaySchemeIntoEmployerResponse;
}(SpeakeasyBase));
export { PostHolidaySchemeIntoEmployerResponse };
