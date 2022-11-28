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
export var DeleteFieldTypeServerList = [
    "https://autopilot.twilio.com",
];
var DeleteFieldTypePathParams = /** @class */ (function (_super) {
    __extends(DeleteFieldTypePathParams, _super);
    function DeleteFieldTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], DeleteFieldTypePathParams.prototype, "assistantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteFieldTypePathParams.prototype, "sid", void 0);
    return DeleteFieldTypePathParams;
}(SpeakeasyBase));
export { DeleteFieldTypePathParams };
var DeleteFieldTypeSecurity = /** @class */ (function (_super) {
    __extends(DeleteFieldTypeSecurity, _super);
    function DeleteFieldTypeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteFieldTypeSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteFieldTypeSecurity;
}(SpeakeasyBase));
export { DeleteFieldTypeSecurity };
var DeleteFieldTypeRequest = /** @class */ (function (_super) {
    __extends(DeleteFieldTypeRequest, _super);
    function DeleteFieldTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteFieldTypeRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteFieldTypePathParams)
    ], DeleteFieldTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteFieldTypeSecurity)
    ], DeleteFieldTypeRequest.prototype, "security", void 0);
    return DeleteFieldTypeRequest;
}(SpeakeasyBase));
export { DeleteFieldTypeRequest };
var DeleteFieldTypeResponse = /** @class */ (function (_super) {
    __extends(DeleteFieldTypeResponse, _super);
    function DeleteFieldTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteFieldTypeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteFieldTypeResponse.prototype, "statusCode", void 0);
    return DeleteFieldTypeResponse;
}(SpeakeasyBase));
export { DeleteFieldTypeResponse };
