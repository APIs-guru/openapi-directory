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
export var CreateSyncSyncMapItemServerList = [
    "https://preview.twilio.com",
];
var CreateSyncSyncMapItemPathParams = /** @class */ (function (_super) {
    __extends(CreateSyncSyncMapItemPathParams, _super);
    function CreateSyncSyncMapItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MapSid" }),
        __metadata("design:type", String)
    ], CreateSyncSyncMapItemPathParams.prototype, "mapSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateSyncSyncMapItemPathParams.prototype, "serviceSid", void 0);
    return CreateSyncSyncMapItemPathParams;
}(SpeakeasyBase));
export { CreateSyncSyncMapItemPathParams };
var CreateSyncSyncMapItemCreateSyncSyncMapItemRequest = /** @class */ (function (_super) {
    __extends(CreateSyncSyncMapItemCreateSyncSyncMapItemRequest, _super);
    function CreateSyncSyncMapItemCreateSyncSyncMapItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Data;" }),
        __metadata("design:type", Object)
    ], CreateSyncSyncMapItemCreateSyncSyncMapItemRequest.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Key;" }),
        __metadata("design:type", String)
    ], CreateSyncSyncMapItemCreateSyncSyncMapItemRequest.prototype, "key", void 0);
    return CreateSyncSyncMapItemCreateSyncSyncMapItemRequest;
}(SpeakeasyBase));
export { CreateSyncSyncMapItemCreateSyncSyncMapItemRequest };
var CreateSyncSyncMapItemSecurity = /** @class */ (function (_super) {
    __extends(CreateSyncSyncMapItemSecurity, _super);
    function CreateSyncSyncMapItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSyncSyncMapItemSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSyncSyncMapItemSecurity;
}(SpeakeasyBase));
export { CreateSyncSyncMapItemSecurity };
var CreateSyncSyncMapItemRequest = /** @class */ (function (_super) {
    __extends(CreateSyncSyncMapItemRequest, _super);
    function CreateSyncSyncMapItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSyncSyncMapItemRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSyncSyncMapItemPathParams)
    ], CreateSyncSyncMapItemRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSyncSyncMapItemCreateSyncSyncMapItemRequest)
    ], CreateSyncSyncMapItemRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSyncSyncMapItemSecurity)
    ], CreateSyncSyncMapItemRequest.prototype, "security", void 0);
    return CreateSyncSyncMapItemRequest;
}(SpeakeasyBase));
export { CreateSyncSyncMapItemRequest };
var CreateSyncSyncMapItemResponse = /** @class */ (function (_super) {
    __extends(CreateSyncSyncMapItemResponse, _super);
    function CreateSyncSyncMapItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSyncSyncMapItemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSyncSyncMapItemResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewSyncServiceSyncMapSyncMapItem)
    ], CreateSyncSyncMapItemResponse.prototype, "previewSyncServiceSyncMapSyncMapItem", void 0);
    return CreateSyncSyncMapItemResponse;
}(SpeakeasyBase));
export { CreateSyncSyncMapItemResponse };
