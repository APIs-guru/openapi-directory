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
export var LISTTRUNK_SERVERS = [
    "https://trunking.twilio.com",
];
var ListTrunkQueryParams = /** @class */ (function (_super) {
    __extends(ListTrunkQueryParams, _super);
    function ListTrunkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListTrunkQueryParams.prototype, "pageSize", void 0);
    return ListTrunkQueryParams;
}(SpeakeasyBase));
export { ListTrunkQueryParams };
var ListTrunkSecurity = /** @class */ (function (_super) {
    __extends(ListTrunkSecurity, _super);
    function ListTrunkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListTrunkSecurity.prototype, "accountSidAuthToken", void 0);
    return ListTrunkSecurity;
}(SpeakeasyBase));
export { ListTrunkSecurity };
var ListTrunkRequest = /** @class */ (function (_super) {
    __extends(ListTrunkRequest, _super);
    function ListTrunkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListTrunkRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTrunkQueryParams)
    ], ListTrunkRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTrunkSecurity)
    ], ListTrunkRequest.prototype, "security", void 0);
    return ListTrunkRequest;
}(SpeakeasyBase));
export { ListTrunkRequest };
var ListTrunkListTrunkResponseMeta = /** @class */ (function (_super) {
    __extends(ListTrunkListTrunkResponseMeta, _super);
    function ListTrunkListTrunkResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListTrunkListTrunkResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListTrunkListTrunkResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListTrunkListTrunkResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListTrunkListTrunkResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListTrunkListTrunkResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListTrunkListTrunkResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListTrunkListTrunkResponseMeta.prototype, "url", void 0);
    return ListTrunkListTrunkResponseMeta;
}(SpeakeasyBase));
export { ListTrunkListTrunkResponseMeta };
var ListTrunkListTrunkResponse = /** @class */ (function (_super) {
    __extends(ListTrunkListTrunkResponse, _super);
    function ListTrunkListTrunkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListTrunkListTrunkResponseMeta)
    ], ListTrunkListTrunkResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=trunks", elemType: shared.TrunkingV1Trunk }),
        __metadata("design:type", Array)
    ], ListTrunkListTrunkResponse.prototype, "trunks", void 0);
    return ListTrunkListTrunkResponse;
}(SpeakeasyBase));
export { ListTrunkListTrunkResponse };
var ListTrunkResponse = /** @class */ (function (_super) {
    __extends(ListTrunkResponse, _super);
    function ListTrunkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListTrunkResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTrunkListTrunkResponse)
    ], ListTrunkResponse.prototype, "listTrunkResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListTrunkResponse.prototype, "statusCode", void 0);
    return ListTrunkResponse;
}(SpeakeasyBase));
export { ListTrunkResponse };
