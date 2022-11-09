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
export var LegacyBoxScoreFormatEnum;
(function (LegacyBoxScoreFormatEnum) {
    LegacyBoxScoreFormatEnum["Xml"] = "XML";
    LegacyBoxScoreFormatEnum["Json"] = "JSON";
})(LegacyBoxScoreFormatEnum || (LegacyBoxScoreFormatEnum = {}));
var LegacyBoxScorePathParams = /** @class */ (function (_super) {
    __extends(LegacyBoxScorePathParams, _super);
    function LegacyBoxScorePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], LegacyBoxScorePathParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=hometeam" }),
        __metadata("design:type", String)
    ], LegacyBoxScorePathParams.prototype, "hometeam", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=season" }),
        __metadata("design:type", String)
    ], LegacyBoxScorePathParams.prototype, "season", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=week" }),
        __metadata("design:type", String)
    ], LegacyBoxScorePathParams.prototype, "week", void 0);
    return LegacyBoxScorePathParams;
}(SpeakeasyBase));
export { LegacyBoxScorePathParams };
var LegacyBoxScoreRequest = /** @class */ (function (_super) {
    __extends(LegacyBoxScoreRequest, _super);
    function LegacyBoxScoreRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LegacyBoxScorePathParams)
    ], LegacyBoxScoreRequest.prototype, "pathParams", void 0);
    return LegacyBoxScoreRequest;
}(SpeakeasyBase));
export { LegacyBoxScoreRequest };
var LegacyBoxScoreResponse = /** @class */ (function (_super) {
    __extends(LegacyBoxScoreResponse, _super);
    function LegacyBoxScoreResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], LegacyBoxScoreResponse.prototype, "boxScore", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LegacyBoxScoreResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LegacyBoxScoreResponse.prototype, "statusCode", void 0);
    return LegacyBoxScoreResponse;
}(SpeakeasyBase));
export { LegacyBoxScoreResponse };
