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
export var DriverDetailsFormatEnum;
(function (DriverDetailsFormatEnum) {
    DriverDetailsFormatEnum["Xml"] = "xml";
    DriverDetailsFormatEnum["Json"] = "json";
})(DriverDetailsFormatEnum || (DriverDetailsFormatEnum = {}));
var DriverDetailsPathParams = /** @class */ (function (_super) {
    __extends(DriverDetailsPathParams, _super);
    function DriverDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=driverid" }),
        __metadata("design:type", String)
    ], DriverDetailsPathParams.prototype, "driverid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], DriverDetailsPathParams.prototype, "format", void 0);
    return DriverDetailsPathParams;
}(SpeakeasyBase));
export { DriverDetailsPathParams };
var DriverDetailsRequest = /** @class */ (function (_super) {
    __extends(DriverDetailsRequest, _super);
    function DriverDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DriverDetailsPathParams)
    ], DriverDetailsRequest.prototype, "pathParams", void 0);
    return DriverDetailsRequest;
}(SpeakeasyBase));
export { DriverDetailsRequest };
var DriverDetailsResponse = /** @class */ (function (_super) {
    __extends(DriverDetailsResponse, _super);
    function DriverDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DriverDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DriverDetailsResponse.prototype, "driver", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DriverDetailsResponse.prototype, "statusCode", void 0);
    return DriverDetailsResponse;
}(SpeakeasyBase));
export { DriverDetailsResponse };
