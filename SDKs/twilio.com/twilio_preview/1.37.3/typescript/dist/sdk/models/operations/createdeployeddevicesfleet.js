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
export var CreateDeployedDevicesFleetServerList = [
    "https://preview.twilio.com",
];
var CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest = /** @class */ (function (_super) {
    __extends(CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest, _super);
    function CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest.prototype, "friendlyName", void 0);
    return CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest;
}(SpeakeasyBase));
export { CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest };
var CreateDeployedDevicesFleetSecurity = /** @class */ (function (_super) {
    __extends(CreateDeployedDevicesFleetSecurity, _super);
    function CreateDeployedDevicesFleetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateDeployedDevicesFleetSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateDeployedDevicesFleetSecurity;
}(SpeakeasyBase));
export { CreateDeployedDevicesFleetSecurity };
var CreateDeployedDevicesFleetRequest = /** @class */ (function (_super) {
    __extends(CreateDeployedDevicesFleetRequest, _super);
    function CreateDeployedDevicesFleetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDeployedDevicesFleetRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest)
    ], CreateDeployedDevicesFleetRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDeployedDevicesFleetSecurity)
    ], CreateDeployedDevicesFleetRequest.prototype, "security", void 0);
    return CreateDeployedDevicesFleetRequest;
}(SpeakeasyBase));
export { CreateDeployedDevicesFleetRequest };
var CreateDeployedDevicesFleetResponse = /** @class */ (function (_super) {
    __extends(CreateDeployedDevicesFleetResponse, _super);
    function CreateDeployedDevicesFleetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDeployedDevicesFleetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDeployedDevicesFleetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewDeployedDevicesFleet)
    ], CreateDeployedDevicesFleetResponse.prototype, "previewDeployedDevicesFleet", void 0);
    return CreateDeployedDevicesFleetResponse;
}(SpeakeasyBase));
export { CreateDeployedDevicesFleetResponse };
