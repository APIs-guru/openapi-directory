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
export var ListUserChannelServerList = [
    "https://chat.twilio.com",
];
var ListUserChannelPathParams = /** @class */ (function (_super) {
    __extends(ListUserChannelPathParams, _super);
    function ListUserChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListUserChannelPathParams.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=UserSid" }),
        __metadata("design:type", String)
    ], ListUserChannelPathParams.prototype, "userSid", void 0);
    return ListUserChannelPathParams;
}(SpeakeasyBase));
export { ListUserChannelPathParams };
var ListUserChannelQueryParams = /** @class */ (function (_super) {
    __extends(ListUserChannelQueryParams, _super);
    function ListUserChannelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListUserChannelQueryParams.prototype, "pageSize", void 0);
    return ListUserChannelQueryParams;
}(SpeakeasyBase));
export { ListUserChannelQueryParams };
var ListUserChannelSecurity = /** @class */ (function (_super) {
    __extends(ListUserChannelSecurity, _super);
    function ListUserChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListUserChannelSecurity.prototype, "accountSidAuthToken", void 0);
    return ListUserChannelSecurity;
}(SpeakeasyBase));
export { ListUserChannelSecurity };
var ListUserChannelListUserChannelResponseMeta = /** @class */ (function (_super) {
    __extends(ListUserChannelListUserChannelResponseMeta, _super);
    function ListUserChannelListUserChannelResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListUserChannelListUserChannelResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListUserChannelListUserChannelResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListUserChannelListUserChannelResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListUserChannelListUserChannelResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListUserChannelListUserChannelResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListUserChannelListUserChannelResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListUserChannelListUserChannelResponseMeta.prototype, "url", void 0);
    return ListUserChannelListUserChannelResponseMeta;
}(SpeakeasyBase));
export { ListUserChannelListUserChannelResponseMeta };
var ListUserChannelListUserChannelResponse = /** @class */ (function (_super) {
    __extends(ListUserChannelListUserChannelResponse, _super);
    function ListUserChannelListUserChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channels", elemType: shared.ChatV1ServiceUserUserChannel }),
        __metadata("design:type", Array)
    ], ListUserChannelListUserChannelResponse.prototype, "channels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListUserChannelListUserChannelResponseMeta)
    ], ListUserChannelListUserChannelResponse.prototype, "meta", void 0);
    return ListUserChannelListUserChannelResponse;
}(SpeakeasyBase));
export { ListUserChannelListUserChannelResponse };
var ListUserChannelRequest = /** @class */ (function (_super) {
    __extends(ListUserChannelRequest, _super);
    function ListUserChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListUserChannelRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUserChannelPathParams)
    ], ListUserChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUserChannelQueryParams)
    ], ListUserChannelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUserChannelSecurity)
    ], ListUserChannelRequest.prototype, "security", void 0);
    return ListUserChannelRequest;
}(SpeakeasyBase));
export { ListUserChannelRequest };
var ListUserChannelResponse = /** @class */ (function (_super) {
    __extends(ListUserChannelResponse, _super);
    function ListUserChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListUserChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListUserChannelListUserChannelResponse)
    ], ListUserChannelResponse.prototype, "listUserChannelResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListUserChannelResponse.prototype, "statusCode", void 0);
    return ListUserChannelResponse;
}(SpeakeasyBase));
export { ListUserChannelResponse };
