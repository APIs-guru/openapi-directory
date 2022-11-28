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
export var ListRoleServerList = [
    "https://ip-messaging.twilio.com",
];
var ListRolePathParams = /** @class */ (function (_super) {
    __extends(ListRolePathParams, _super);
    function ListRolePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListRolePathParams.prototype, "serviceSid", void 0);
    return ListRolePathParams;
}(SpeakeasyBase));
export { ListRolePathParams };
var ListRoleQueryParams = /** @class */ (function (_super) {
    __extends(ListRoleQueryParams, _super);
    function ListRoleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListRoleQueryParams.prototype, "pageSize", void 0);
    return ListRoleQueryParams;
}(SpeakeasyBase));
export { ListRoleQueryParams };
var ListRoleSecurity = /** @class */ (function (_super) {
    __extends(ListRoleSecurity, _super);
    function ListRoleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListRoleSecurity.prototype, "accountSidAuthToken", void 0);
    return ListRoleSecurity;
}(SpeakeasyBase));
export { ListRoleSecurity };
var ListRoleListRoleResponseMeta = /** @class */ (function (_super) {
    __extends(ListRoleListRoleResponseMeta, _super);
    function ListRoleListRoleResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListRoleListRoleResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListRoleListRoleResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListRoleListRoleResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListRoleListRoleResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListRoleListRoleResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListRoleListRoleResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListRoleListRoleResponseMeta.prototype, "url", void 0);
    return ListRoleListRoleResponseMeta;
}(SpeakeasyBase));
export { ListRoleListRoleResponseMeta };
var ListRoleListRoleResponse = /** @class */ (function (_super) {
    __extends(ListRoleListRoleResponse, _super);
    function ListRoleListRoleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListRoleListRoleResponseMeta)
    ], ListRoleListRoleResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roles", elemType: shared.IpMessagingV2ServiceRole }),
        __metadata("design:type", Array)
    ], ListRoleListRoleResponse.prototype, "roles", void 0);
    return ListRoleListRoleResponse;
}(SpeakeasyBase));
export { ListRoleListRoleResponse };
var ListRoleRequest = /** @class */ (function (_super) {
    __extends(ListRoleRequest, _super);
    function ListRoleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListRoleRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRolePathParams)
    ], ListRoleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRoleQueryParams)
    ], ListRoleRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRoleSecurity)
    ], ListRoleRequest.prototype, "security", void 0);
    return ListRoleRequest;
}(SpeakeasyBase));
export { ListRoleRequest };
var ListRoleResponse = /** @class */ (function (_super) {
    __extends(ListRoleResponse, _super);
    function ListRoleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListRoleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRoleListRoleResponse)
    ], ListRoleResponse.prototype, "listRoleResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListRoleResponse.prototype, "statusCode", void 0);
    return ListRoleResponse;
}(SpeakeasyBase));
export { ListRoleResponse };
