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
var GetIpIpv4TxtPathParams = /** @class */ (function (_super) {
    __extends(GetIpIpv4TxtPathParams, _super);
    function GetIpIpv4TxtPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ipv4" }),
        __metadata("design:type", String)
    ], GetIpIpv4TxtPathParams.prototype, "ipv4", void 0);
    return GetIpIpv4TxtPathParams;
}(SpeakeasyBase));
export { GetIpIpv4TxtPathParams };
var GetIpIpv4TxtRequest = /** @class */ (function (_super) {
    __extends(GetIpIpv4TxtRequest, _super);
    function GetIpIpv4TxtRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIpIpv4TxtPathParams)
    ], GetIpIpv4TxtRequest.prototype, "pathParams", void 0);
    return GetIpIpv4TxtRequest;
}(SpeakeasyBase));
export { GetIpIpv4TxtRequest };
var GetIpIpv4TxtResponse = /** @class */ (function (_super) {
    __extends(GetIpIpv4TxtResponse, _super);
    function GetIpIpv4TxtResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetIpIpv4TxtResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetIpIpv4TxtResponse.prototype, "dateTimeTextResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetIpIpv4TxtResponse.prototype, "errorTextResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetIpIpv4TxtResponse.prototype, "statusCode", void 0);
    return GetIpIpv4TxtResponse;
}(SpeakeasyBase));
export { GetIpIpv4TxtResponse };
