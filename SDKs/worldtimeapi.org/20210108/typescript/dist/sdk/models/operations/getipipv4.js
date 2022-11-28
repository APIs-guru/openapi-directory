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
var GetIpIpv4PathParams = /** @class */ (function (_super) {
    __extends(GetIpIpv4PathParams, _super);
    function GetIpIpv4PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ipv4" }),
        __metadata("design:type", String)
    ], GetIpIpv4PathParams.prototype, "ipv4", void 0);
    return GetIpIpv4PathParams;
}(SpeakeasyBase));
export { GetIpIpv4PathParams };
var GetIpIpv4Request = /** @class */ (function (_super) {
    __extends(GetIpIpv4Request, _super);
    function GetIpIpv4Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIpIpv4PathParams)
    ], GetIpIpv4Request.prototype, "pathParams", void 0);
    return GetIpIpv4Request;
}(SpeakeasyBase));
export { GetIpIpv4Request };
var GetIpIpv4Response = /** @class */ (function (_super) {
    __extends(GetIpIpv4Response, _super);
    function GetIpIpv4Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetIpIpv4Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetIpIpv4Response.prototype, "dateTimeJsonResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetIpIpv4Response.prototype, "errorJsonResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetIpIpv4Response.prototype, "statusCode", void 0);
    return GetIpIpv4Response;
}(SpeakeasyBase));
export { GetIpIpv4Response };
