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
export var CreateActivityServerList = [
    "https://taskrouter.twilio.com",
];
var CreateActivityPathParams = /** @class */ (function (_super) {
    __extends(CreateActivityPathParams, _super);
    function CreateActivityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], CreateActivityPathParams.prototype, "workspaceSid", void 0);
    return CreateActivityPathParams;
}(SpeakeasyBase));
export { CreateActivityPathParams };
var CreateActivityCreateActivityRequest = /** @class */ (function (_super) {
    __extends(CreateActivityCreateActivityRequest, _super);
    function CreateActivityCreateActivityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Available;" }),
        __metadata("design:type", Boolean)
    ], CreateActivityCreateActivityRequest.prototype, "available", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateActivityCreateActivityRequest.prototype, "friendlyName", void 0);
    return CreateActivityCreateActivityRequest;
}(SpeakeasyBase));
export { CreateActivityCreateActivityRequest };
var CreateActivitySecurity = /** @class */ (function (_super) {
    __extends(CreateActivitySecurity, _super);
    function CreateActivitySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateActivitySecurity.prototype, "accountSidAuthToken", void 0);
    return CreateActivitySecurity;
}(SpeakeasyBase));
export { CreateActivitySecurity };
var CreateActivityRequest = /** @class */ (function (_super) {
    __extends(CreateActivityRequest, _super);
    function CreateActivityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateActivityRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateActivityPathParams)
    ], CreateActivityRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateActivityCreateActivityRequest)
    ], CreateActivityRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateActivitySecurity)
    ], CreateActivityRequest.prototype, "security", void 0);
    return CreateActivityRequest;
}(SpeakeasyBase));
export { CreateActivityRequest };
var CreateActivityResponse = /** @class */ (function (_super) {
    __extends(CreateActivityResponse, _super);
    function CreateActivityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateActivityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateActivityResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceActivity)
    ], CreateActivityResponse.prototype, "taskrouterV1WorkspaceActivity", void 0);
    return CreateActivityResponse;
}(SpeakeasyBase));
export { CreateActivityResponse };
