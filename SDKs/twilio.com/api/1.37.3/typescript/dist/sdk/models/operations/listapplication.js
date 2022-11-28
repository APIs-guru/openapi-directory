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
export var ListApplicationServerList = [
    "https://api.twilio.com",
];
var ListApplicationPathParams = /** @class */ (function (_super) {
    __extends(ListApplicationPathParams, _super);
    function ListApplicationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListApplicationPathParams.prototype, "accountSid", void 0);
    return ListApplicationPathParams;
}(SpeakeasyBase));
export { ListApplicationPathParams };
var ListApplicationQueryParams = /** @class */ (function (_super) {
    __extends(ListApplicationQueryParams, _super);
    function ListApplicationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListApplicationQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListApplicationQueryParams.prototype, "pageSize", void 0);
    return ListApplicationQueryParams;
}(SpeakeasyBase));
export { ListApplicationQueryParams };
var ListApplicationSecurity = /** @class */ (function (_super) {
    __extends(ListApplicationSecurity, _super);
    function ListApplicationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListApplicationSecurity.prototype, "accountSidAuthToken", void 0);
    return ListApplicationSecurity;
}(SpeakeasyBase));
export { ListApplicationSecurity };
var ListApplicationListApplicationResponse = /** @class */ (function (_super) {
    __extends(ListApplicationListApplicationResponse, _super);
    function ListApplicationListApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applications", elemType: shared.ApiV2010AccountApplication }),
        __metadata("design:type", Array)
    ], ListApplicationListApplicationResponse.prototype, "applications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListApplicationListApplicationResponse.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListApplicationListApplicationResponse.prototype, "firstPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListApplicationListApplicationResponse.prototype, "nextPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListApplicationListApplicationResponse.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListApplicationListApplicationResponse.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListApplicationListApplicationResponse.prototype, "previousPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListApplicationListApplicationResponse.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListApplicationListApplicationResponse.prototype, "uri", void 0);
    return ListApplicationListApplicationResponse;
}(SpeakeasyBase));
export { ListApplicationListApplicationResponse };
var ListApplicationRequest = /** @class */ (function (_super) {
    __extends(ListApplicationRequest, _super);
    function ListApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListApplicationRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListApplicationPathParams)
    ], ListApplicationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListApplicationQueryParams)
    ], ListApplicationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListApplicationSecurity)
    ], ListApplicationRequest.prototype, "security", void 0);
    return ListApplicationRequest;
}(SpeakeasyBase));
export { ListApplicationRequest };
var ListApplicationResponse = /** @class */ (function (_super) {
    __extends(ListApplicationResponse, _super);
    function ListApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListApplicationListApplicationResponse)
    ], ListApplicationResponse.prototype, "listApplicationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListApplicationResponse.prototype, "statusCode", void 0);
    return ListApplicationResponse;
}(SpeakeasyBase));
export { ListApplicationResponse };
