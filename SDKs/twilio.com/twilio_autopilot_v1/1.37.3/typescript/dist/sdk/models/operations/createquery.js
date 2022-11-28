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
export var CreateQueryServerList = [
    "https://autopilot.twilio.com",
];
var CreateQueryPathParams = /** @class */ (function (_super) {
    __extends(CreateQueryPathParams, _super);
    function CreateQueryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], CreateQueryPathParams.prototype, "assistantSid", void 0);
    return CreateQueryPathParams;
}(SpeakeasyBase));
export { CreateQueryPathParams };
var CreateQueryCreateQueryRequest = /** @class */ (function (_super) {
    __extends(CreateQueryCreateQueryRequest, _super);
    function CreateQueryCreateQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Language;" }),
        __metadata("design:type", String)
    ], CreateQueryCreateQueryRequest.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ModelBuild;" }),
        __metadata("design:type", String)
    ], CreateQueryCreateQueryRequest.prototype, "modelBuild", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Query;" }),
        __metadata("design:type", String)
    ], CreateQueryCreateQueryRequest.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Tasks;" }),
        __metadata("design:type", String)
    ], CreateQueryCreateQueryRequest.prototype, "tasks", void 0);
    return CreateQueryCreateQueryRequest;
}(SpeakeasyBase));
export { CreateQueryCreateQueryRequest };
var CreateQuerySecurity = /** @class */ (function (_super) {
    __extends(CreateQuerySecurity, _super);
    function CreateQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateQuerySecurity.prototype, "accountSidAuthToken", void 0);
    return CreateQuerySecurity;
}(SpeakeasyBase));
export { CreateQuerySecurity };
var CreateQueryRequest = /** @class */ (function (_super) {
    __extends(CreateQueryRequest, _super);
    function CreateQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateQueryRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateQueryPathParams)
    ], CreateQueryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateQueryCreateQueryRequest)
    ], CreateQueryRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateQuerySecurity)
    ], CreateQueryRequest.prototype, "security", void 0);
    return CreateQueryRequest;
}(SpeakeasyBase));
export { CreateQueryRequest };
var CreateQueryResponse = /** @class */ (function (_super) {
    __extends(CreateQueryResponse, _super);
    function CreateQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateQueryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateQueryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AutopilotV1AssistantQuery)
    ], CreateQueryResponse.prototype, "autopilotV1AssistantQuery", void 0);
    return CreateQueryResponse;
}(SpeakeasyBase));
export { CreateQueryResponse };
