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
export var ListMemberServerList = [
    "https://ip-messaging.twilio.com",
];
var ListMemberPathParams = /** @class */ (function (_super) {
    __extends(ListMemberPathParams, _super);
    function ListMemberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" }),
        __metadata("design:type", String)
    ], ListMemberPathParams.prototype, "channelSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListMemberPathParams.prototype, "serviceSid", void 0);
    return ListMemberPathParams;
}(SpeakeasyBase));
export { ListMemberPathParams };
var ListMemberQueryParams = /** @class */ (function (_super) {
    __extends(ListMemberQueryParams, _super);
    function ListMemberQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Identity" }),
        __metadata("design:type", Array)
    ], ListMemberQueryParams.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListMemberQueryParams.prototype, "pageSize", void 0);
    return ListMemberQueryParams;
}(SpeakeasyBase));
export { ListMemberQueryParams };
var ListMemberSecurity = /** @class */ (function (_super) {
    __extends(ListMemberSecurity, _super);
    function ListMemberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListMemberSecurity.prototype, "accountSidAuthToken", void 0);
    return ListMemberSecurity;
}(SpeakeasyBase));
export { ListMemberSecurity };
var ListMemberListMemberResponseMeta = /** @class */ (function (_super) {
    __extends(ListMemberListMemberResponseMeta, _super);
    function ListMemberListMemberResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListMemberListMemberResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListMemberListMemberResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListMemberListMemberResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListMemberListMemberResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListMemberListMemberResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListMemberListMemberResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListMemberListMemberResponseMeta.prototype, "url", void 0);
    return ListMemberListMemberResponseMeta;
}(SpeakeasyBase));
export { ListMemberListMemberResponseMeta };
var ListMemberListMemberResponse = /** @class */ (function (_super) {
    __extends(ListMemberListMemberResponse, _super);
    function ListMemberListMemberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members", elemType: shared.IpMessagingV1ServiceChannelMember }),
        __metadata("design:type", Array)
    ], ListMemberListMemberResponse.prototype, "members", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListMemberListMemberResponseMeta)
    ], ListMemberListMemberResponse.prototype, "meta", void 0);
    return ListMemberListMemberResponse;
}(SpeakeasyBase));
export { ListMemberListMemberResponse };
var ListMemberRequest = /** @class */ (function (_super) {
    __extends(ListMemberRequest, _super);
    function ListMemberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListMemberRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMemberPathParams)
    ], ListMemberRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMemberQueryParams)
    ], ListMemberRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMemberSecurity)
    ], ListMemberRequest.prototype, "security", void 0);
    return ListMemberRequest;
}(SpeakeasyBase));
export { ListMemberRequest };
var ListMemberResponse = /** @class */ (function (_super) {
    __extends(ListMemberResponse, _super);
    function ListMemberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListMemberResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMemberListMemberResponse)
    ], ListMemberResponse.prototype, "listMemberResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListMemberResponse.prototype, "statusCode", void 0);
    return ListMemberResponse;
}(SpeakeasyBase));
export { ListMemberResponse };
