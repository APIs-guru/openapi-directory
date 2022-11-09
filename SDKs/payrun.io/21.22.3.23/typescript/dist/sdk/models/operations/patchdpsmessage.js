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
var PatchDpsMessagePathParams = /** @class */ (function (_super) {
    __extends(PatchDpsMessagePathParams, _super);
    function PatchDpsMessagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=DpsMessageId" }),
        __metadata("design:type", String)
    ], PatchDpsMessagePathParams.prototype, "dpsMessageId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], PatchDpsMessagePathParams.prototype, "employerId", void 0);
    return PatchDpsMessagePathParams;
}(SpeakeasyBase));
export { PatchDpsMessagePathParams };
var PatchDpsMessageHeaders = /** @class */ (function (_super) {
    __extends(PatchDpsMessageHeaders, _super);
    function PatchDpsMessageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PatchDpsMessageHeaders.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PatchDpsMessageHeaders.prototype, "authorization", void 0);
    return PatchDpsMessageHeaders;
}(SpeakeasyBase));
export { PatchDpsMessageHeaders };
var PatchDpsMessageRequest = /** @class */ (function (_super) {
    __extends(PatchDpsMessageRequest, _super);
    function PatchDpsMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PatchDpsMessagePathParams)
    ], PatchDpsMessageRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PatchDpsMessageHeaders)
    ], PatchDpsMessageRequest.prototype, "headers", void 0);
    return PatchDpsMessageRequest;
}(SpeakeasyBase));
export { PatchDpsMessageRequest };
var PatchDpsMessageResponse = /** @class */ (function (_super) {
    __extends(PatchDpsMessageResponse, _super);
    function PatchDpsMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PatchDpsMessageResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DpsMessage)
    ], PatchDpsMessageResponse.prototype, "dpsMessage", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], PatchDpsMessageResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PatchDpsMessageResponse.prototype, "statusCode", void 0);
    return PatchDpsMessageResponse;
}(SpeakeasyBase));
export { PatchDpsMessageResponse };
