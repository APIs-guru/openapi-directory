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
export var CreateSyncMapItemServerList = [
    "https://sync.twilio.com",
];
var CreateSyncMapItemPathParams = /** @class */ (function (_super) {
    __extends(CreateSyncMapItemPathParams, _super);
    function CreateSyncMapItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MapSid" }),
        __metadata("design:type", String)
    ], CreateSyncMapItemPathParams.prototype, "mapSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateSyncMapItemPathParams.prototype, "serviceSid", void 0);
    return CreateSyncMapItemPathParams;
}(SpeakeasyBase));
export { CreateSyncMapItemPathParams };
var CreateSyncMapItemCreateSyncMapItemRequest = /** @class */ (function (_super) {
    __extends(CreateSyncMapItemCreateSyncMapItemRequest, _super);
    function CreateSyncMapItemCreateSyncMapItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CollectionTtl;" }),
        __metadata("design:type", Number)
    ], CreateSyncMapItemCreateSyncMapItemRequest.prototype, "collectionTtl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Data;" }),
        __metadata("design:type", Object)
    ], CreateSyncMapItemCreateSyncMapItemRequest.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ItemTtl;" }),
        __metadata("design:type", Number)
    ], CreateSyncMapItemCreateSyncMapItemRequest.prototype, "itemTtl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Key;" }),
        __metadata("design:type", String)
    ], CreateSyncMapItemCreateSyncMapItemRequest.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Ttl;" }),
        __metadata("design:type", Number)
    ], CreateSyncMapItemCreateSyncMapItemRequest.prototype, "ttl", void 0);
    return CreateSyncMapItemCreateSyncMapItemRequest;
}(SpeakeasyBase));
export { CreateSyncMapItemCreateSyncMapItemRequest };
var CreateSyncMapItemSecurity = /** @class */ (function (_super) {
    __extends(CreateSyncMapItemSecurity, _super);
    function CreateSyncMapItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSyncMapItemSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSyncMapItemSecurity;
}(SpeakeasyBase));
export { CreateSyncMapItemSecurity };
var CreateSyncMapItemRequest = /** @class */ (function (_super) {
    __extends(CreateSyncMapItemRequest, _super);
    function CreateSyncMapItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSyncMapItemRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSyncMapItemPathParams)
    ], CreateSyncMapItemRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSyncMapItemCreateSyncMapItemRequest)
    ], CreateSyncMapItemRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSyncMapItemSecurity)
    ], CreateSyncMapItemRequest.prototype, "security", void 0);
    return CreateSyncMapItemRequest;
}(SpeakeasyBase));
export { CreateSyncMapItemRequest };
var CreateSyncMapItemResponse = /** @class */ (function (_super) {
    __extends(CreateSyncMapItemResponse, _super);
    function CreateSyncMapItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSyncMapItemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSyncMapItemResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SyncV1ServiceSyncMapSyncMapItem)
    ], CreateSyncMapItemResponse.prototype, "syncV1ServiceSyncMapSyncMapItem", void 0);
    return CreateSyncMapItemResponse;
}(SpeakeasyBase));
export { CreateSyncMapItemResponse };
