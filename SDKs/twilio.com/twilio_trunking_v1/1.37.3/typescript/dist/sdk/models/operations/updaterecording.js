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
export var UpdateRecordingServerList = [
    "https://trunking.twilio.com",
];
var UpdateRecordingPathParams = /** @class */ (function (_super) {
    __extends(UpdateRecordingPathParams, _super);
    function UpdateRecordingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" }),
        __metadata("design:type", String)
    ], UpdateRecordingPathParams.prototype, "trunkSid", void 0);
    return UpdateRecordingPathParams;
}(SpeakeasyBase));
export { UpdateRecordingPathParams };
var UpdateRecordingUpdateRecordingRequest = /** @class */ (function (_super) {
    __extends(UpdateRecordingUpdateRecordingRequest, _super);
    function UpdateRecordingUpdateRecordingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Mode;" }),
        __metadata("design:type", String)
    ], UpdateRecordingUpdateRecordingRequest.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Trim;" }),
        __metadata("design:type", String)
    ], UpdateRecordingUpdateRecordingRequest.prototype, "trim", void 0);
    return UpdateRecordingUpdateRecordingRequest;
}(SpeakeasyBase));
export { UpdateRecordingUpdateRecordingRequest };
var UpdateRecordingSecurity = /** @class */ (function (_super) {
    __extends(UpdateRecordingSecurity, _super);
    function UpdateRecordingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateRecordingSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateRecordingSecurity;
}(SpeakeasyBase));
export { UpdateRecordingSecurity };
var UpdateRecordingRequest = /** @class */ (function (_super) {
    __extends(UpdateRecordingRequest, _super);
    function UpdateRecordingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateRecordingRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateRecordingPathParams)
    ], UpdateRecordingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateRecordingUpdateRecordingRequest)
    ], UpdateRecordingRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateRecordingSecurity)
    ], UpdateRecordingRequest.prototype, "security", void 0);
    return UpdateRecordingRequest;
}(SpeakeasyBase));
export { UpdateRecordingRequest };
var UpdateRecordingResponse = /** @class */ (function (_super) {
    __extends(UpdateRecordingResponse, _super);
    function UpdateRecordingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateRecordingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateRecordingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TrunkingV1TrunkRecording)
    ], UpdateRecordingResponse.prototype, "trunkingV1TrunkRecording", void 0);
    return UpdateRecordingResponse;
}(SpeakeasyBase));
export { UpdateRecordingResponse };
