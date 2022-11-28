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
export var ScoresByDateFormatEnum;
(function (ScoresByDateFormatEnum) {
    ScoresByDateFormatEnum["Xml"] = "XML";
    ScoresByDateFormatEnum["Json"] = "JSON";
})(ScoresByDateFormatEnum || (ScoresByDateFormatEnum = {}));
var ScoresByDatePathParams = /** @class */ (function (_super) {
    __extends(ScoresByDatePathParams, _super);
    function ScoresByDatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" }),
        __metadata("design:type", String)
    ], ScoresByDatePathParams.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], ScoresByDatePathParams.prototype, "format", void 0);
    return ScoresByDatePathParams;
}(SpeakeasyBase));
export { ScoresByDatePathParams };
var ScoresByDateRequest = /** @class */ (function (_super) {
    __extends(ScoresByDateRequest, _super);
    function ScoresByDateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScoresByDatePathParams)
    ], ScoresByDateRequest.prototype, "pathParams", void 0);
    return ScoresByDateRequest;
}(SpeakeasyBase));
export { ScoresByDateRequest };
var ScoresByDateResponse = /** @class */ (function (_super) {
    __extends(ScoresByDateResponse, _super);
    function ScoresByDateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ScoresByDateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], ScoresByDateResponse.prototype, "scores", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ScoresByDateResponse.prototype, "statusCode", void 0);
    return ScoresByDateResponse;
}(SpeakeasyBase));
export { ScoresByDateResponse };
