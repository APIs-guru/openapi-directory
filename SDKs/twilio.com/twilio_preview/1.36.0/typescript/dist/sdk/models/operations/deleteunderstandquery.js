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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var DELETEUNDERSTANDQUERY_SERVERS = [
    "https://preview.twilio.com",
];
var DeleteUnderstandQueryPathParams = /** @class */ (function (_super) {
    __extends(DeleteUnderstandQueryPathParams, _super);
    function DeleteUnderstandQueryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], DeleteUnderstandQueryPathParams.prototype, "assistantSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteUnderstandQueryPathParams.prototype, "sid", void 0);
    return DeleteUnderstandQueryPathParams;
}(SpeakeasyBase));
export { DeleteUnderstandQueryPathParams };
var DeleteUnderstandQuerySecurity = /** @class */ (function (_super) {
    __extends(DeleteUnderstandQuerySecurity, _super);
    function DeleteUnderstandQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteUnderstandQuerySecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteUnderstandQuerySecurity;
}(SpeakeasyBase));
export { DeleteUnderstandQuerySecurity };
var DeleteUnderstandQueryRequest = /** @class */ (function (_super) {
    __extends(DeleteUnderstandQueryRequest, _super);
    function DeleteUnderstandQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteUnderstandQueryRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteUnderstandQueryPathParams)
    ], DeleteUnderstandQueryRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteUnderstandQuerySecurity)
    ], DeleteUnderstandQueryRequest.prototype, "security", void 0);
    return DeleteUnderstandQueryRequest;
}(SpeakeasyBase));
export { DeleteUnderstandQueryRequest };
var DeleteUnderstandQueryResponse = /** @class */ (function (_super) {
    __extends(DeleteUnderstandQueryResponse, _super);
    function DeleteUnderstandQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteUnderstandQueryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteUnderstandQueryResponse.prototype, "statusCode", void 0);
    return DeleteUnderstandQueryResponse;
}(SpeakeasyBase));
export { DeleteUnderstandQueryResponse };
