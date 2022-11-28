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
export var FetchActivityServerList = [
    "https://taskrouter.twilio.com",
];
var FetchActivityPathParams = /** @class */ (function (_super) {
    __extends(FetchActivityPathParams, _super);
    function FetchActivityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchActivityPathParams.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], FetchActivityPathParams.prototype, "workspaceSid", void 0);
    return FetchActivityPathParams;
}(SpeakeasyBase));
export { FetchActivityPathParams };
var FetchActivitySecurity = /** @class */ (function (_super) {
    __extends(FetchActivitySecurity, _super);
    function FetchActivitySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchActivitySecurity.prototype, "accountSidAuthToken", void 0);
    return FetchActivitySecurity;
}(SpeakeasyBase));
export { FetchActivitySecurity };
var FetchActivityRequest = /** @class */ (function (_super) {
    __extends(FetchActivityRequest, _super);
    function FetchActivityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchActivityRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchActivityPathParams)
    ], FetchActivityRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchActivitySecurity)
    ], FetchActivityRequest.prototype, "security", void 0);
    return FetchActivityRequest;
}(SpeakeasyBase));
export { FetchActivityRequest };
var FetchActivityResponse = /** @class */ (function (_super) {
    __extends(FetchActivityResponse, _super);
    function FetchActivityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchActivityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchActivityResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceActivity)
    ], FetchActivityResponse.prototype, "taskrouterV1WorkspaceActivity", void 0);
    return FetchActivityResponse;
}(SpeakeasyBase));
export { FetchActivityResponse };
