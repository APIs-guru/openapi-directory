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
export var DELETESYNCSYNCMAPITEM_SERVERS = [
    "https://preview.twilio.com",
];
var DeleteSyncSyncMapItemPathParams = /** @class */ (function (_super) {
    __extends(DeleteSyncSyncMapItemPathParams, _super);
    function DeleteSyncSyncMapItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Key" }),
        __metadata("design:type", String)
    ], DeleteSyncSyncMapItemPathParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=MapSid" }),
        __metadata("design:type", String)
    ], DeleteSyncSyncMapItemPathParams.prototype, "mapSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], DeleteSyncSyncMapItemPathParams.prototype, "serviceSid", void 0);
    return DeleteSyncSyncMapItemPathParams;
}(SpeakeasyBase));
export { DeleteSyncSyncMapItemPathParams };
var DeleteSyncSyncMapItemHeaders = /** @class */ (function (_super) {
    __extends(DeleteSyncSyncMapItemHeaders, _super);
    function DeleteSyncSyncMapItemHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], DeleteSyncSyncMapItemHeaders.prototype, "ifMatch", void 0);
    return DeleteSyncSyncMapItemHeaders;
}(SpeakeasyBase));
export { DeleteSyncSyncMapItemHeaders };
var DeleteSyncSyncMapItemSecurity = /** @class */ (function (_super) {
    __extends(DeleteSyncSyncMapItemSecurity, _super);
    function DeleteSyncSyncMapItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteSyncSyncMapItemSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteSyncSyncMapItemSecurity;
}(SpeakeasyBase));
export { DeleteSyncSyncMapItemSecurity };
var DeleteSyncSyncMapItemRequest = /** @class */ (function (_super) {
    __extends(DeleteSyncSyncMapItemRequest, _super);
    function DeleteSyncSyncMapItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteSyncSyncMapItemRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteSyncSyncMapItemPathParams)
    ], DeleteSyncSyncMapItemRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteSyncSyncMapItemHeaders)
    ], DeleteSyncSyncMapItemRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteSyncSyncMapItemSecurity)
    ], DeleteSyncSyncMapItemRequest.prototype, "security", void 0);
    return DeleteSyncSyncMapItemRequest;
}(SpeakeasyBase));
export { DeleteSyncSyncMapItemRequest };
var DeleteSyncSyncMapItemResponse = /** @class */ (function (_super) {
    __extends(DeleteSyncSyncMapItemResponse, _super);
    function DeleteSyncSyncMapItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteSyncSyncMapItemResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteSyncSyncMapItemResponse.prototype, "statusCode", void 0);
    return DeleteSyncSyncMapItemResponse;
}(SpeakeasyBase));
export { DeleteSyncSyncMapItemResponse };
