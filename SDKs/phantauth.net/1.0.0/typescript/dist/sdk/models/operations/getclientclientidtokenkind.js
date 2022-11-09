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
export var GetClientClientIdTokenKindKindEnum;
(function (GetClientClientIdTokenKindKindEnum) {
    GetClientClientIdTokenKindKindEnum["Registration"] = "'registration'";
    GetClientClientIdTokenKindKindEnum["Selfie"] = "'selfie'";
    GetClientClientIdTokenKindKindEnum["Plain"] = "'plain'";
})(GetClientClientIdTokenKindKindEnum || (GetClientClientIdTokenKindKindEnum = {}));
var GetClientClientIdTokenKindPathParams = /** @class */ (function (_super) {
    __extends(GetClientClientIdTokenKindPathParams, _super);
    function GetClientClientIdTokenKindPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=client_id" }),
        __metadata("design:type", String)
    ], GetClientClientIdTokenKindPathParams.prototype, "clientId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=kind" }),
        __metadata("design:type", String)
    ], GetClientClientIdTokenKindPathParams.prototype, "kind", void 0);
    return GetClientClientIdTokenKindPathParams;
}(SpeakeasyBase));
export { GetClientClientIdTokenKindPathParams };
var GetClientClientIdTokenKindRequest = /** @class */ (function (_super) {
    __extends(GetClientClientIdTokenKindRequest, _super);
    function GetClientClientIdTokenKindRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetClientClientIdTokenKindPathParams)
    ], GetClientClientIdTokenKindRequest.prototype, "pathParams", void 0);
    return GetClientClientIdTokenKindRequest;
}(SpeakeasyBase));
export { GetClientClientIdTokenKindRequest };
var GetClientClientIdTokenKindResponse = /** @class */ (function (_super) {
    __extends(GetClientClientIdTokenKindResponse, _super);
    function GetClientClientIdTokenKindResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetClientClientIdTokenKindResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetClientClientIdTokenKindResponse.prototype, "statusCode", void 0);
    return GetClientClientIdTokenKindResponse;
}(SpeakeasyBase));
export { GetClientClientIdTokenKindResponse };
