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
export var LISTPLAYERSTREAMER_SERVERS = [
    "https://media.twilio.com",
];
var ListPlayerStreamerQueryParams = /** @class */ (function (_super) {
    __extends(ListPlayerStreamerQueryParams, _super);
    function ListPlayerStreamerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Order" }),
        __metadata("design:type", String)
    ], ListPlayerStreamerQueryParams.prototype, "order", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListPlayerStreamerQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListPlayerStreamerQueryParams.prototype, "status", void 0);
    return ListPlayerStreamerQueryParams;
}(SpeakeasyBase));
export { ListPlayerStreamerQueryParams };
var ListPlayerStreamerSecurity = /** @class */ (function (_super) {
    __extends(ListPlayerStreamerSecurity, _super);
    function ListPlayerStreamerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListPlayerStreamerSecurity.prototype, "accountSidAuthToken", void 0);
    return ListPlayerStreamerSecurity;
}(SpeakeasyBase));
export { ListPlayerStreamerSecurity };
var ListPlayerStreamerRequest = /** @class */ (function (_super) {
    __extends(ListPlayerStreamerRequest, _super);
    function ListPlayerStreamerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListPlayerStreamerRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListPlayerStreamerQueryParams)
    ], ListPlayerStreamerRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListPlayerStreamerSecurity)
    ], ListPlayerStreamerRequest.prototype, "security", void 0);
    return ListPlayerStreamerRequest;
}(SpeakeasyBase));
export { ListPlayerStreamerRequest };
var ListPlayerStreamerListPlayerStreamerResponseMeta = /** @class */ (function (_super) {
    __extends(ListPlayerStreamerListPlayerStreamerResponseMeta, _super);
    function ListPlayerStreamerListPlayerStreamerResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListPlayerStreamerListPlayerStreamerResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListPlayerStreamerListPlayerStreamerResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListPlayerStreamerListPlayerStreamerResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListPlayerStreamerListPlayerStreamerResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListPlayerStreamerListPlayerStreamerResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListPlayerStreamerListPlayerStreamerResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListPlayerStreamerListPlayerStreamerResponseMeta.prototype, "url", void 0);
    return ListPlayerStreamerListPlayerStreamerResponseMeta;
}(SpeakeasyBase));
export { ListPlayerStreamerListPlayerStreamerResponseMeta };
var ListPlayerStreamerListPlayerStreamerResponse = /** @class */ (function (_super) {
    __extends(ListPlayerStreamerListPlayerStreamerResponse, _super);
    function ListPlayerStreamerListPlayerStreamerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListPlayerStreamerListPlayerStreamerResponseMeta)
    ], ListPlayerStreamerListPlayerStreamerResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=player_streamers", elemType: shared.MediaV1PlayerStreamer }),
        __metadata("design:type", Array)
    ], ListPlayerStreamerListPlayerStreamerResponse.prototype, "playerStreamers", void 0);
    return ListPlayerStreamerListPlayerStreamerResponse;
}(SpeakeasyBase));
export { ListPlayerStreamerListPlayerStreamerResponse };
var ListPlayerStreamerResponse = /** @class */ (function (_super) {
    __extends(ListPlayerStreamerResponse, _super);
    function ListPlayerStreamerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListPlayerStreamerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListPlayerStreamerListPlayerStreamerResponse)
    ], ListPlayerStreamerResponse.prototype, "listPlayerStreamerResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListPlayerStreamerResponse.prototype, "statusCode", void 0);
    return ListPlayerStreamerResponse;
}(SpeakeasyBase));
export { ListPlayerStreamerResponse };
