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
export var ListMediaServerList = [
    "https://api.twilio.com",
];
var ListMediaPathParams = /** @class */ (function (_super) {
    __extends(ListMediaPathParams, _super);
    function ListMediaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListMediaPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MessageSid" }),
        __metadata("design:type", String)
    ], ListMediaPathParams.prototype, "messageSid", void 0);
    return ListMediaPathParams;
}(SpeakeasyBase));
export { ListMediaPathParams };
var ListMediaQueryParams = /** @class */ (function (_super) {
    __extends(ListMediaQueryParams, _super);
    function ListMediaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreated" }),
        __metadata("design:type", Date)
    ], ListMediaQueryParams.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreated<" }),
        __metadata("design:type", Date)
    ], ListMediaQueryParams.prototype, "dateCreatedLessThan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreated>" }),
        __metadata("design:type", Date)
    ], ListMediaQueryParams.prototype, "dateCreatedGreaterThan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListMediaQueryParams.prototype, "pageSize", void 0);
    return ListMediaQueryParams;
}(SpeakeasyBase));
export { ListMediaQueryParams };
var ListMediaSecurity = /** @class */ (function (_super) {
    __extends(ListMediaSecurity, _super);
    function ListMediaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListMediaSecurity.prototype, "accountSidAuthToken", void 0);
    return ListMediaSecurity;
}(SpeakeasyBase));
export { ListMediaSecurity };
var ListMediaListMediaResponse = /** @class */ (function (_super) {
    __extends(ListMediaListMediaResponse, _super);
    function ListMediaListMediaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListMediaListMediaResponse.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListMediaListMediaResponse.prototype, "firstPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=media_list", elemType: shared.ApiV2010AccountMessageMedia }),
        __metadata("design:type", Array)
    ], ListMediaListMediaResponse.prototype, "mediaList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListMediaListMediaResponse.prototype, "nextPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListMediaListMediaResponse.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListMediaListMediaResponse.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListMediaListMediaResponse.prototype, "previousPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListMediaListMediaResponse.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListMediaListMediaResponse.prototype, "uri", void 0);
    return ListMediaListMediaResponse;
}(SpeakeasyBase));
export { ListMediaListMediaResponse };
var ListMediaRequest = /** @class */ (function (_super) {
    __extends(ListMediaRequest, _super);
    function ListMediaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListMediaRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMediaPathParams)
    ], ListMediaRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMediaQueryParams)
    ], ListMediaRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMediaSecurity)
    ], ListMediaRequest.prototype, "security", void 0);
    return ListMediaRequest;
}(SpeakeasyBase));
export { ListMediaRequest };
var ListMediaResponse = /** @class */ (function (_super) {
    __extends(ListMediaResponse, _super);
    function ListMediaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListMediaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMediaListMediaResponse)
    ], ListMediaResponse.prototype, "listMediaResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListMediaResponse.prototype, "statusCode", void 0);
    return ListMediaResponse;
}(SpeakeasyBase));
export { ListMediaResponse };
