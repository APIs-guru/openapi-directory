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
export var CreateSyncListItemServerList = [
    "https://sync.twilio.com",
];
var CreateSyncListItemPathParams = /** @class */ (function (_super) {
    __extends(CreateSyncListItemPathParams, _super);
    function CreateSyncListItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ListSid" }),
        __metadata("design:type", String)
    ], CreateSyncListItemPathParams.prototype, "listSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateSyncListItemPathParams.prototype, "serviceSid", void 0);
    return CreateSyncListItemPathParams;
}(SpeakeasyBase));
export { CreateSyncListItemPathParams };
var CreateSyncListItemCreateSyncListItemRequest = /** @class */ (function (_super) {
    __extends(CreateSyncListItemCreateSyncListItemRequest, _super);
    function CreateSyncListItemCreateSyncListItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CollectionTtl;" }),
        __metadata("design:type", Number)
    ], CreateSyncListItemCreateSyncListItemRequest.prototype, "collectionTtl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Data;" }),
        __metadata("design:type", Object)
    ], CreateSyncListItemCreateSyncListItemRequest.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ItemTtl;" }),
        __metadata("design:type", Number)
    ], CreateSyncListItemCreateSyncListItemRequest.prototype, "itemTtl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Ttl;" }),
        __metadata("design:type", Number)
    ], CreateSyncListItemCreateSyncListItemRequest.prototype, "ttl", void 0);
    return CreateSyncListItemCreateSyncListItemRequest;
}(SpeakeasyBase));
export { CreateSyncListItemCreateSyncListItemRequest };
var CreateSyncListItemSecurity = /** @class */ (function (_super) {
    __extends(CreateSyncListItemSecurity, _super);
    function CreateSyncListItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSyncListItemSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSyncListItemSecurity;
}(SpeakeasyBase));
export { CreateSyncListItemSecurity };
var CreateSyncListItemRequest = /** @class */ (function (_super) {
    __extends(CreateSyncListItemRequest, _super);
    function CreateSyncListItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSyncListItemRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSyncListItemPathParams)
    ], CreateSyncListItemRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSyncListItemCreateSyncListItemRequest)
    ], CreateSyncListItemRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSyncListItemSecurity)
    ], CreateSyncListItemRequest.prototype, "security", void 0);
    return CreateSyncListItemRequest;
}(SpeakeasyBase));
export { CreateSyncListItemRequest };
var CreateSyncListItemResponse = /** @class */ (function (_super) {
    __extends(CreateSyncListItemResponse, _super);
    function CreateSyncListItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSyncListItemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSyncListItemResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SyncV1ServiceSyncListSyncListItem)
    ], CreateSyncListItemResponse.prototype, "syncV1ServiceSyncListSyncListItem", void 0);
    return CreateSyncListItemResponse;
}(SpeakeasyBase));
export { CreateSyncListItemResponse };
