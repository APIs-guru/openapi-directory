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
export var CreateDeployedDevicesDeploymentServerList = [
    "https://preview.twilio.com",
];
var CreateDeployedDevicesDeploymentPathParams = /** @class */ (function (_super) {
    __extends(CreateDeployedDevicesDeploymentPathParams, _super);
    function CreateDeployedDevicesDeploymentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FleetSid" }),
        __metadata("design:type", String)
    ], CreateDeployedDevicesDeploymentPathParams.prototype, "fleetSid", void 0);
    return CreateDeployedDevicesDeploymentPathParams;
}(SpeakeasyBase));
export { CreateDeployedDevicesDeploymentPathParams };
var CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest = /** @class */ (function (_super) {
    __extends(CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest, _super);
    function CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SyncServiceSid;" }),
        __metadata("design:type", String)
    ], CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest.prototype, "syncServiceSid", void 0);
    return CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest;
}(SpeakeasyBase));
export { CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest };
var CreateDeployedDevicesDeploymentSecurity = /** @class */ (function (_super) {
    __extends(CreateDeployedDevicesDeploymentSecurity, _super);
    function CreateDeployedDevicesDeploymentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateDeployedDevicesDeploymentSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateDeployedDevicesDeploymentSecurity;
}(SpeakeasyBase));
export { CreateDeployedDevicesDeploymentSecurity };
var CreateDeployedDevicesDeploymentRequest = /** @class */ (function (_super) {
    __extends(CreateDeployedDevicesDeploymentRequest, _super);
    function CreateDeployedDevicesDeploymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDeployedDevicesDeploymentRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDeployedDevicesDeploymentPathParams)
    ], CreateDeployedDevicesDeploymentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest)
    ], CreateDeployedDevicesDeploymentRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDeployedDevicesDeploymentSecurity)
    ], CreateDeployedDevicesDeploymentRequest.prototype, "security", void 0);
    return CreateDeployedDevicesDeploymentRequest;
}(SpeakeasyBase));
export { CreateDeployedDevicesDeploymentRequest };
var CreateDeployedDevicesDeploymentResponse = /** @class */ (function (_super) {
    __extends(CreateDeployedDevicesDeploymentResponse, _super);
    function CreateDeployedDevicesDeploymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDeployedDevicesDeploymentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDeployedDevicesDeploymentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewDeployedDevicesFleetDeployment)
    ], CreateDeployedDevicesDeploymentResponse.prototype, "previewDeployedDevicesFleetDeployment", void 0);
    return CreateDeployedDevicesDeploymentResponse;
}(SpeakeasyBase));
export { CreateDeployedDevicesDeploymentResponse };
