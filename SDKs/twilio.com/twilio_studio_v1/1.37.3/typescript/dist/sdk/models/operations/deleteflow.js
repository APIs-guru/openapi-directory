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
export var DeleteFlowServerList = [
    "https://studio.twilio.com",
];
var DeleteFlowPathParams = /** @class */ (function (_super) {
    __extends(DeleteFlowPathParams, _super);
    function DeleteFlowPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteFlowPathParams.prototype, "sid", void 0);
    return DeleteFlowPathParams;
}(SpeakeasyBase));
export { DeleteFlowPathParams };
var DeleteFlowSecurity = /** @class */ (function (_super) {
    __extends(DeleteFlowSecurity, _super);
    function DeleteFlowSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteFlowSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteFlowSecurity;
}(SpeakeasyBase));
export { DeleteFlowSecurity };
var DeleteFlowRequest = /** @class */ (function (_super) {
    __extends(DeleteFlowRequest, _super);
    function DeleteFlowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteFlowRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteFlowPathParams)
    ], DeleteFlowRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteFlowSecurity)
    ], DeleteFlowRequest.prototype, "security", void 0);
    return DeleteFlowRequest;
}(SpeakeasyBase));
export { DeleteFlowRequest };
var DeleteFlowResponse = /** @class */ (function (_super) {
    __extends(DeleteFlowResponse, _super);
    function DeleteFlowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteFlowResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteFlowResponse.prototype, "statusCode", void 0);
    return DeleteFlowResponse;
}(SpeakeasyBase));
export { DeleteFlowResponse };
