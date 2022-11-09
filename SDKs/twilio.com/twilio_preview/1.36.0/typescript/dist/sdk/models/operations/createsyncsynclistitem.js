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
export var CREATESYNCSYNCLISTITEM_SERVERS = [
    "https://preview.twilio.com",
];
var CreateSyncSyncListItemPathParams = /** @class */ (function (_super) {
    __extends(CreateSyncSyncListItemPathParams, _super);
    function CreateSyncSyncListItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ListSid" }),
        __metadata("design:type", String)
    ], CreateSyncSyncListItemPathParams.prototype, "listSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateSyncSyncListItemPathParams.prototype, "serviceSid", void 0);
    return CreateSyncSyncListItemPathParams;
}(SpeakeasyBase));
export { CreateSyncSyncListItemPathParams };
var CreateSyncSyncListItemCreateSyncSyncListItemRequest = /** @class */ (function (_super) {
    __extends(CreateSyncSyncListItemCreateSyncSyncListItemRequest, _super);
    function CreateSyncSyncListItemCreateSyncSyncListItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Data;" }),
        __metadata("design:type", Object)
    ], CreateSyncSyncListItemCreateSyncSyncListItemRequest.prototype, "data", void 0);
    return CreateSyncSyncListItemCreateSyncSyncListItemRequest;
}(SpeakeasyBase));
export { CreateSyncSyncListItemCreateSyncSyncListItemRequest };
var CreateSyncSyncListItemSecurity = /** @class */ (function (_super) {
    __extends(CreateSyncSyncListItemSecurity, _super);
    function CreateSyncSyncListItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSyncSyncListItemSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSyncSyncListItemSecurity;
}(SpeakeasyBase));
export { CreateSyncSyncListItemSecurity };
var CreateSyncSyncListItemRequest = /** @class */ (function (_super) {
    __extends(CreateSyncSyncListItemRequest, _super);
    function CreateSyncSyncListItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSyncSyncListItemRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateSyncSyncListItemPathParams)
    ], CreateSyncSyncListItemRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSyncSyncListItemCreateSyncSyncListItemRequest)
    ], CreateSyncSyncListItemRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateSyncSyncListItemSecurity)
    ], CreateSyncSyncListItemRequest.prototype, "security", void 0);
    return CreateSyncSyncListItemRequest;
}(SpeakeasyBase));
export { CreateSyncSyncListItemRequest };
var CreateSyncSyncListItemResponse = /** @class */ (function (_super) {
    __extends(CreateSyncSyncListItemResponse, _super);
    function CreateSyncSyncListItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSyncSyncListItemResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateSyncSyncListItemResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewSyncServiceSyncListSyncListItem)
    ], CreateSyncSyncListItemResponse.prototype, "previewSyncServiceSyncListSyncListItem", void 0);
    return CreateSyncSyncListItemResponse;
}(SpeakeasyBase));
export { CreateSyncSyncListItemResponse };
