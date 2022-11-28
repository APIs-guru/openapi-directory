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
export var CreateFieldServerList = [
    "https://autopilot.twilio.com",
];
var CreateFieldPathParams = /** @class */ (function (_super) {
    __extends(CreateFieldPathParams, _super);
    function CreateFieldPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], CreateFieldPathParams.prototype, "assistantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" }),
        __metadata("design:type", String)
    ], CreateFieldPathParams.prototype, "taskSid", void 0);
    return CreateFieldPathParams;
}(SpeakeasyBase));
export { CreateFieldPathParams };
var CreateFieldCreateFieldRequest = /** @class */ (function (_super) {
    __extends(CreateFieldCreateFieldRequest, _super);
    function CreateFieldCreateFieldRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FieldType;" }),
        __metadata("design:type", String)
    ], CreateFieldCreateFieldRequest.prototype, "fieldType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateFieldCreateFieldRequest.prototype, "uniqueName", void 0);
    return CreateFieldCreateFieldRequest;
}(SpeakeasyBase));
export { CreateFieldCreateFieldRequest };
var CreateFieldSecurity = /** @class */ (function (_super) {
    __extends(CreateFieldSecurity, _super);
    function CreateFieldSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateFieldSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateFieldSecurity;
}(SpeakeasyBase));
export { CreateFieldSecurity };
var CreateFieldRequest = /** @class */ (function (_super) {
    __extends(CreateFieldRequest, _super);
    function CreateFieldRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFieldRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFieldPathParams)
    ], CreateFieldRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateFieldCreateFieldRequest)
    ], CreateFieldRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFieldSecurity)
    ], CreateFieldRequest.prototype, "security", void 0);
    return CreateFieldRequest;
}(SpeakeasyBase));
export { CreateFieldRequest };
var CreateFieldResponse = /** @class */ (function (_super) {
    __extends(CreateFieldResponse, _super);
    function CreateFieldResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFieldResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateFieldResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AutopilotV1AssistantTaskField)
    ], CreateFieldResponse.prototype, "autopilotV1AssistantTaskField", void 0);
    return CreateFieldResponse;
}(SpeakeasyBase));
export { CreateFieldResponse };
