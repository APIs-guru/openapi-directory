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
export var ListServiceRoleServerList = [
    "https://conversations.twilio.com",
];
var ListServiceRolePathParams = /** @class */ (function (_super) {
    __extends(ListServiceRolePathParams, _super);
    function ListServiceRolePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], ListServiceRolePathParams.prototype, "chatServiceSid", void 0);
    return ListServiceRolePathParams;
}(SpeakeasyBase));
export { ListServiceRolePathParams };
var ListServiceRoleQueryParams = /** @class */ (function (_super) {
    __extends(ListServiceRoleQueryParams, _super);
    function ListServiceRoleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListServiceRoleQueryParams.prototype, "pageSize", void 0);
    return ListServiceRoleQueryParams;
}(SpeakeasyBase));
export { ListServiceRoleQueryParams };
var ListServiceRoleSecurity = /** @class */ (function (_super) {
    __extends(ListServiceRoleSecurity, _super);
    function ListServiceRoleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListServiceRoleSecurity.prototype, "accountSidAuthToken", void 0);
    return ListServiceRoleSecurity;
}(SpeakeasyBase));
export { ListServiceRoleSecurity };
var ListServiceRoleListServiceRoleResponseMeta = /** @class */ (function (_super) {
    __extends(ListServiceRoleListServiceRoleResponseMeta, _super);
    function ListServiceRoleListServiceRoleResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListServiceRoleListServiceRoleResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListServiceRoleListServiceRoleResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListServiceRoleListServiceRoleResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListServiceRoleListServiceRoleResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListServiceRoleListServiceRoleResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListServiceRoleListServiceRoleResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListServiceRoleListServiceRoleResponseMeta.prototype, "url", void 0);
    return ListServiceRoleListServiceRoleResponseMeta;
}(SpeakeasyBase));
export { ListServiceRoleListServiceRoleResponseMeta };
var ListServiceRoleListServiceRoleResponse = /** @class */ (function (_super) {
    __extends(ListServiceRoleListServiceRoleResponse, _super);
    function ListServiceRoleListServiceRoleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListServiceRoleListServiceRoleResponseMeta)
    ], ListServiceRoleListServiceRoleResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roles", elemType: shared.ConversationsV1ServiceServiceRole }),
        __metadata("design:type", Array)
    ], ListServiceRoleListServiceRoleResponse.prototype, "roles", void 0);
    return ListServiceRoleListServiceRoleResponse;
}(SpeakeasyBase));
export { ListServiceRoleListServiceRoleResponse };
var ListServiceRoleRequest = /** @class */ (function (_super) {
    __extends(ListServiceRoleRequest, _super);
    function ListServiceRoleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListServiceRoleRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListServiceRolePathParams)
    ], ListServiceRoleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListServiceRoleQueryParams)
    ], ListServiceRoleRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListServiceRoleSecurity)
    ], ListServiceRoleRequest.prototype, "security", void 0);
    return ListServiceRoleRequest;
}(SpeakeasyBase));
export { ListServiceRoleRequest };
var ListServiceRoleResponse = /** @class */ (function (_super) {
    __extends(ListServiceRoleResponse, _super);
    function ListServiceRoleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListServiceRoleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListServiceRoleListServiceRoleResponse)
    ], ListServiceRoleResponse.prototype, "listServiceRoleResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListServiceRoleResponse.prototype, "statusCode", void 0);
    return ListServiceRoleResponse;
}(SpeakeasyBase));
export { ListServiceRoleResponse };
