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
// V2VisionTrainParams
/**
 * JSON that contains parameters that specify how the model is created
**/
var V2VisionTrainParams = /** @class */ (function (_super) {
    __extends(V2VisionTrainParams, _super);
    function V2VisionTrainParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=trainSplitRatio" }),
        __metadata("design:type", Number)
    ], V2VisionTrainParams.prototype, "trainSplitRatio", void 0);
    __decorate([
        Metadata({ data: "json, name=withFeedback" }),
        __metadata("design:type", Boolean)
    ], V2VisionTrainParams.prototype, "withFeedback", void 0);
    __decorate([
        Metadata({ data: "json, name=withGlobalDatasetId" }),
        __metadata("design:type", Number)
    ], V2VisionTrainParams.prototype, "withGlobalDatasetId", void 0);
    return V2VisionTrainParams;
}(SpeakeasyBase));
export { V2VisionTrainParams };
