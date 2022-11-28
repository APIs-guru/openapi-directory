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
export var FetchTaskReservationServerList = [
    "https://taskrouter.twilio.com",
];
var FetchTaskReservationPathParams = /** @class */ (function (_super) {
    __extends(FetchTaskReservationPathParams, _super);
    function FetchTaskReservationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchTaskReservationPathParams.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" }),
        __metadata("design:type", String)
    ], FetchTaskReservationPathParams.prototype, "taskSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], FetchTaskReservationPathParams.prototype, "workspaceSid", void 0);
    return FetchTaskReservationPathParams;
}(SpeakeasyBase));
export { FetchTaskReservationPathParams };
var FetchTaskReservationSecurity = /** @class */ (function (_super) {
    __extends(FetchTaskReservationSecurity, _super);
    function FetchTaskReservationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchTaskReservationSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchTaskReservationSecurity;
}(SpeakeasyBase));
export { FetchTaskReservationSecurity };
var FetchTaskReservationRequest = /** @class */ (function (_super) {
    __extends(FetchTaskReservationRequest, _super);
    function FetchTaskReservationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchTaskReservationRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchTaskReservationPathParams)
    ], FetchTaskReservationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchTaskReservationSecurity)
    ], FetchTaskReservationRequest.prototype, "security", void 0);
    return FetchTaskReservationRequest;
}(SpeakeasyBase));
export { FetchTaskReservationRequest };
var FetchTaskReservationResponse = /** @class */ (function (_super) {
    __extends(FetchTaskReservationResponse, _super);
    function FetchTaskReservationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchTaskReservationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchTaskReservationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TaskrouterV1WorkspaceTaskTaskReservation)
    ], FetchTaskReservationResponse.prototype, "taskrouterV1WorkspaceTaskTaskReservation", void 0);
    return FetchTaskReservationResponse;
}(SpeakeasyBase));
export { FetchTaskReservationResponse };
