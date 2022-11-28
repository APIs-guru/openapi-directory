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
export var ListSyncStreamServerList = [
    "https://sync.twilio.com",
];
var ListSyncStreamPathParams = /** @class */ (function (_super) {
    __extends(ListSyncStreamPathParams, _super);
    function ListSyncStreamPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListSyncStreamPathParams.prototype, "serviceSid", void 0);
    return ListSyncStreamPathParams;
}(SpeakeasyBase));
export { ListSyncStreamPathParams };
var ListSyncStreamQueryParams = /** @class */ (function (_super) {
    __extends(ListSyncStreamQueryParams, _super);
    function ListSyncStreamQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSyncStreamQueryParams.prototype, "pageSize", void 0);
    return ListSyncStreamQueryParams;
}(SpeakeasyBase));
export { ListSyncStreamQueryParams };
var ListSyncStreamSecurity = /** @class */ (function (_super) {
    __extends(ListSyncStreamSecurity, _super);
    function ListSyncStreamSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSyncStreamSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSyncStreamSecurity;
}(SpeakeasyBase));
export { ListSyncStreamSecurity };
var ListSyncStreamListSyncStreamResponseMeta = /** @class */ (function (_super) {
    __extends(ListSyncStreamListSyncStreamResponseMeta, _super);
    function ListSyncStreamListSyncStreamResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSyncStreamListSyncStreamResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSyncStreamListSyncStreamResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSyncStreamListSyncStreamResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSyncStreamListSyncStreamResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSyncStreamListSyncStreamResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSyncStreamListSyncStreamResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSyncStreamListSyncStreamResponseMeta.prototype, "url", void 0);
    return ListSyncStreamListSyncStreamResponseMeta;
}(SpeakeasyBase));
export { ListSyncStreamListSyncStreamResponseMeta };
var ListSyncStreamListSyncStreamResponse = /** @class */ (function (_super) {
    __extends(ListSyncStreamListSyncStreamResponse, _super);
    function ListSyncStreamListSyncStreamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListSyncStreamListSyncStreamResponseMeta)
    ], ListSyncStreamListSyncStreamResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streams", elemType: shared.SyncV1ServiceSyncStream }),
        __metadata("design:type", Array)
    ], ListSyncStreamListSyncStreamResponse.prototype, "streams", void 0);
    return ListSyncStreamListSyncStreamResponse;
}(SpeakeasyBase));
export { ListSyncStreamListSyncStreamResponse };
var ListSyncStreamRequest = /** @class */ (function (_super) {
    __extends(ListSyncStreamRequest, _super);
    function ListSyncStreamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSyncStreamRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncStreamPathParams)
    ], ListSyncStreamRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncStreamQueryParams)
    ], ListSyncStreamRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncStreamSecurity)
    ], ListSyncStreamRequest.prototype, "security", void 0);
    return ListSyncStreamRequest;
}(SpeakeasyBase));
export { ListSyncStreamRequest };
var ListSyncStreamResponse = /** @class */ (function (_super) {
    __extends(ListSyncStreamResponse, _super);
    function ListSyncStreamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSyncStreamResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSyncStreamListSyncStreamResponse)
    ], ListSyncStreamResponse.prototype, "listSyncStreamResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSyncStreamResponse.prototype, "statusCode", void 0);
    return ListSyncStreamResponse;
}(SpeakeasyBase));
export { ListSyncStreamResponse };
