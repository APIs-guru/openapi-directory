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
export var LISTESIMPROFILE_SERVERS = [
    "https://supersim.twilio.com",
];
var ListEsimProfileQueryParams = /** @class */ (function (_super) {
    __extends(ListEsimProfileQueryParams, _super);
    function ListEsimProfileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Eid" }),
        __metadata("design:type", String)
    ], ListEsimProfileQueryParams.prototype, "eid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListEsimProfileQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SimSid" }),
        __metadata("design:type", String)
    ], ListEsimProfileQueryParams.prototype, "simSid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListEsimProfileQueryParams.prototype, "status", void 0);
    return ListEsimProfileQueryParams;
}(SpeakeasyBase));
export { ListEsimProfileQueryParams };
var ListEsimProfileSecurity = /** @class */ (function (_super) {
    __extends(ListEsimProfileSecurity, _super);
    function ListEsimProfileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListEsimProfileSecurity.prototype, "accountSidAuthToken", void 0);
    return ListEsimProfileSecurity;
}(SpeakeasyBase));
export { ListEsimProfileSecurity };
var ListEsimProfileRequest = /** @class */ (function (_super) {
    __extends(ListEsimProfileRequest, _super);
    function ListEsimProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListEsimProfileRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListEsimProfileQueryParams)
    ], ListEsimProfileRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListEsimProfileSecurity)
    ], ListEsimProfileRequest.prototype, "security", void 0);
    return ListEsimProfileRequest;
}(SpeakeasyBase));
export { ListEsimProfileRequest };
var ListEsimProfileListEsimProfileResponseMeta = /** @class */ (function (_super) {
    __extends(ListEsimProfileListEsimProfileResponseMeta, _super);
    function ListEsimProfileListEsimProfileResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListEsimProfileListEsimProfileResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListEsimProfileListEsimProfileResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListEsimProfileListEsimProfileResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListEsimProfileListEsimProfileResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListEsimProfileListEsimProfileResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListEsimProfileListEsimProfileResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListEsimProfileListEsimProfileResponseMeta.prototype, "url", void 0);
    return ListEsimProfileListEsimProfileResponseMeta;
}(SpeakeasyBase));
export { ListEsimProfileListEsimProfileResponseMeta };
var ListEsimProfileListEsimProfileResponse = /** @class */ (function (_super) {
    __extends(ListEsimProfileListEsimProfileResponse, _super);
    function ListEsimProfileListEsimProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=esim_profiles", elemType: shared.SupersimV1EsimProfile }),
        __metadata("design:type", Array)
    ], ListEsimProfileListEsimProfileResponse.prototype, "esimProfiles", void 0);
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListEsimProfileListEsimProfileResponseMeta)
    ], ListEsimProfileListEsimProfileResponse.prototype, "meta", void 0);
    return ListEsimProfileListEsimProfileResponse;
}(SpeakeasyBase));
export { ListEsimProfileListEsimProfileResponse };
var ListEsimProfileResponse = /** @class */ (function (_super) {
    __extends(ListEsimProfileResponse, _super);
    function ListEsimProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListEsimProfileResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListEsimProfileListEsimProfileResponse)
    ], ListEsimProfileResponse.prototype, "listEsimProfileResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListEsimProfileResponse.prototype, "statusCode", void 0);
    return ListEsimProfileResponse;
}(SpeakeasyBase));
export { ListEsimProfileResponse };
