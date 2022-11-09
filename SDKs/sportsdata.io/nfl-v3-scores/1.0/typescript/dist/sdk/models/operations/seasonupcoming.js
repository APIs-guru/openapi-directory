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
export var SeasonUpcomingFormatEnum;
(function (SeasonUpcomingFormatEnum) {
    SeasonUpcomingFormatEnum["Xml"] = "XML";
    SeasonUpcomingFormatEnum["Json"] = "JSON";
})(SeasonUpcomingFormatEnum || (SeasonUpcomingFormatEnum = {}));
var SeasonUpcomingPathParams = /** @class */ (function (_super) {
    __extends(SeasonUpcomingPathParams, _super);
    function SeasonUpcomingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], SeasonUpcomingPathParams.prototype, "format", void 0);
    return SeasonUpcomingPathParams;
}(SpeakeasyBase));
export { SeasonUpcomingPathParams };
var SeasonUpcomingRequest = /** @class */ (function (_super) {
    __extends(SeasonUpcomingRequest, _super);
    function SeasonUpcomingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SeasonUpcomingPathParams)
    ], SeasonUpcomingRequest.prototype, "pathParams", void 0);
    return SeasonUpcomingRequest;
}(SpeakeasyBase));
export { SeasonUpcomingRequest };
var SeasonUpcomingResponse = /** @class */ (function (_super) {
    __extends(SeasonUpcomingResponse, _super);
    function SeasonUpcomingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SeasonUpcomingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SeasonUpcomingResponse.prototype, "seasonUpcoming200ApplicationJsonInteger", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SeasonUpcomingResponse.prototype, "statusCode", void 0);
    return SeasonUpcomingResponse;
}(SpeakeasyBase));
export { SeasonUpcomingResponse };
