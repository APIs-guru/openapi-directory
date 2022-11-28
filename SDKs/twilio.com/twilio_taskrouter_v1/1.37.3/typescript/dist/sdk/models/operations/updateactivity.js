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
export var UpdateActivityServerList = [
    "https://taskrouter.twilio.com",
];
var UpdateActivityPathParams = /** @class */ (function (_super) {
    __extends(UpdateActivityPathParams, _super);
    function UpdateActivityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateActivityPathParams.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], UpdateActivityPathParams.prototype, "workspaceSid", void 0);
    return UpdateActivityPathParams;
}(SpeakeasyBase));
export { UpdateActivityPathParams };
var UpdateActivityUpdateActivityRequest = /** @class */ (function (_super) {
    __extends(UpdateActivityUpdateActivityRequest, _super);
    function UpdateActivityUpdateActivityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateActivityUpdateActivityRequest.prototype, "friendlyName", void 0);
    return UpdateActivityUpdateActivityRequest;
}(SpeakeasyBase));
export { UpdateActivityUpdateActivityRequest };
var UpdateActivitySecurity = /** @class */ (function (_super) {
    __extends(UpdateActivitySecurity, _super);
    function UpdateActivitySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateActivitySecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateActivitySecurity;
}(SpeakeasyBase));
export { UpdateActivitySecurity };
var UpdateActivityRequest = /** @class */ (function (_super) {
    __extends(UpdateActivityRequest, _super);
    function UpdateActivityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateActivityRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateActivityPathParams)
    ], UpdateActivityRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateActivityUpdateActivityRequest)
    ], UpdateActivityRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateActivitySecurity)
    ], UpdateActivityRequest.prototype, "security", void 0);
    return UpdateActivityRequest;
}(SpeakeasyBase));
export { UpdateActivityRequest };
var UpdateActivityResponse = /** @class */ (function (_super) {
    __extends(UpdateActivityResponse, _super);
    function UpdateActivityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateActivityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateActivityResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceActivity)
    ], UpdateActivityResponse.prototype, "taskrouterV1WorkspaceActivity", void 0);
    return UpdateActivityResponse;
}(SpeakeasyBase));
export { UpdateActivityResponse };
