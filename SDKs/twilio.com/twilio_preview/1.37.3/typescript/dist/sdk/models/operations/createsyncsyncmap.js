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
export var CreateSyncSyncMapServerList = [
    "https://preview.twilio.com",
];
var CreateSyncSyncMapPathParams = /** @class */ (function (_super) {
    __extends(CreateSyncSyncMapPathParams, _super);
    function CreateSyncSyncMapPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateSyncSyncMapPathParams.prototype, "serviceSid", void 0);
    return CreateSyncSyncMapPathParams;
}(SpeakeasyBase));
export { CreateSyncSyncMapPathParams };
var CreateSyncSyncMapCreateSyncSyncMapRequest = /** @class */ (function (_super) {
    __extends(CreateSyncSyncMapCreateSyncSyncMapRequest, _super);
    function CreateSyncSyncMapCreateSyncSyncMapRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateSyncSyncMapCreateSyncSyncMapRequest.prototype, "uniqueName", void 0);
    return CreateSyncSyncMapCreateSyncSyncMapRequest;
}(SpeakeasyBase));
export { CreateSyncSyncMapCreateSyncSyncMapRequest };
var CreateSyncSyncMapSecurity = /** @class */ (function (_super) {
    __extends(CreateSyncSyncMapSecurity, _super);
    function CreateSyncSyncMapSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSyncSyncMapSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSyncSyncMapSecurity;
}(SpeakeasyBase));
export { CreateSyncSyncMapSecurity };
var CreateSyncSyncMapRequest = /** @class */ (function (_super) {
    __extends(CreateSyncSyncMapRequest, _super);
    function CreateSyncSyncMapRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSyncSyncMapRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSyncSyncMapPathParams)
    ], CreateSyncSyncMapRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSyncSyncMapCreateSyncSyncMapRequest)
    ], CreateSyncSyncMapRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSyncSyncMapSecurity)
    ], CreateSyncSyncMapRequest.prototype, "security", void 0);
    return CreateSyncSyncMapRequest;
}(SpeakeasyBase));
export { CreateSyncSyncMapRequest };
var CreateSyncSyncMapResponse = /** @class */ (function (_super) {
    __extends(CreateSyncSyncMapResponse, _super);
    function CreateSyncSyncMapResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSyncSyncMapResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSyncSyncMapResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewSyncServiceSyncMap)
    ], CreateSyncSyncMapResponse.prototype, "previewSyncServiceSyncMap", void 0);
    return CreateSyncSyncMapResponse;
}(SpeakeasyBase));
export { CreateSyncSyncMapResponse };
