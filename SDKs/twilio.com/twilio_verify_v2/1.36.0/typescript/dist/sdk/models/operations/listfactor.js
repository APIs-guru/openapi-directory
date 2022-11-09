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
export var LISTFACTOR_SERVERS = [
    "https://verify.twilio.com",
];
var ListFactorPathParams = /** @class */ (function (_super) {
    __extends(ListFactorPathParams, _super);
    function ListFactorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Identity" }),
        __metadata("design:type", String)
    ], ListFactorPathParams.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListFactorPathParams.prototype, "serviceSid", void 0);
    return ListFactorPathParams;
}(SpeakeasyBase));
export { ListFactorPathParams };
var ListFactorQueryParams = /** @class */ (function (_super) {
    __extends(ListFactorQueryParams, _super);
    function ListFactorQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListFactorQueryParams.prototype, "pageSize", void 0);
    return ListFactorQueryParams;
}(SpeakeasyBase));
export { ListFactorQueryParams };
var ListFactorSecurity = /** @class */ (function (_super) {
    __extends(ListFactorSecurity, _super);
    function ListFactorSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListFactorSecurity.prototype, "accountSidAuthToken", void 0);
    return ListFactorSecurity;
}(SpeakeasyBase));
export { ListFactorSecurity };
var ListFactorRequest = /** @class */ (function (_super) {
    __extends(ListFactorRequest, _super);
    function ListFactorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListFactorRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFactorPathParams)
    ], ListFactorRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFactorQueryParams)
    ], ListFactorRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFactorSecurity)
    ], ListFactorRequest.prototype, "security", void 0);
    return ListFactorRequest;
}(SpeakeasyBase));
export { ListFactorRequest };
var ListFactorListFactorResponseMeta = /** @class */ (function (_super) {
    __extends(ListFactorListFactorResponseMeta, _super);
    function ListFactorListFactorResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListFactorListFactorResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListFactorListFactorResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListFactorListFactorResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListFactorListFactorResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListFactorListFactorResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListFactorListFactorResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListFactorListFactorResponseMeta.prototype, "url", void 0);
    return ListFactorListFactorResponseMeta;
}(SpeakeasyBase));
export { ListFactorListFactorResponseMeta };
var ListFactorListFactorResponse = /** @class */ (function (_super) {
    __extends(ListFactorListFactorResponse, _super);
    function ListFactorListFactorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=factors", elemType: shared.VerifyV2ServiceEntityFactor }),
        __metadata("design:type", Array)
    ], ListFactorListFactorResponse.prototype, "factors", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListFactorListFactorResponseMeta)
    ], ListFactorListFactorResponse.prototype, "meta", void 0);
    return ListFactorListFactorResponse;
}(SpeakeasyBase));
export { ListFactorListFactorResponse };
var ListFactorResponse = /** @class */ (function (_super) {
    __extends(ListFactorResponse, _super);
    function ListFactorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListFactorResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListFactorListFactorResponse)
    ], ListFactorResponse.prototype, "listFactorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListFactorResponse.prototype, "statusCode", void 0);
    return ListFactorResponse;
}(SpeakeasyBase));
export { ListFactorResponse };
