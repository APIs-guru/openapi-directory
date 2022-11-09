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
export var SchedulesFormatEnum;
(function (SchedulesFormatEnum) {
    SchedulesFormatEnum["Xml"] = "XML";
    SchedulesFormatEnum["Json"] = "JSON";
})(SchedulesFormatEnum || (SchedulesFormatEnum = {}));
var SchedulesPathParams = /** @class */ (function (_super) {
    __extends(SchedulesPathParams, _super);
    function SchedulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], SchedulesPathParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=season" }),
        __metadata("design:type", String)
    ], SchedulesPathParams.prototype, "season", void 0);
    return SchedulesPathParams;
}(SpeakeasyBase));
export { SchedulesPathParams };
var SchedulesRequest = /** @class */ (function (_super) {
    __extends(SchedulesRequest, _super);
    function SchedulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SchedulesPathParams)
    ], SchedulesRequest.prototype, "pathParams", void 0);
    return SchedulesRequest;
}(SpeakeasyBase));
export { SchedulesRequest };
var SchedulesResponse = /** @class */ (function (_super) {
    __extends(SchedulesResponse, _super);
    function SchedulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SchedulesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], SchedulesResponse.prototype, "games", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SchedulesResponse.prototype, "statusCode", void 0);
    return SchedulesResponse;
}(SpeakeasyBase));
export { SchedulesResponse };
