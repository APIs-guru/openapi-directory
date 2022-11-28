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
export var TflApiPresentationEntitiesRoadProjectPhaseEnum;
(function (TflApiPresentationEntitiesRoadProjectPhaseEnum) {
    TflApiPresentationEntitiesRoadProjectPhaseEnum["Unscoped"] = "Unscoped";
    TflApiPresentationEntitiesRoadProjectPhaseEnum["Concept"] = "Concept";
    TflApiPresentationEntitiesRoadProjectPhaseEnum["ConsultationEnded"] = "ConsultationEnded";
    TflApiPresentationEntitiesRoadProjectPhaseEnum["Consultation"] = "Consultation";
    TflApiPresentationEntitiesRoadProjectPhaseEnum["Construction"] = "Construction";
    TflApiPresentationEntitiesRoadProjectPhaseEnum["Complete"] = "Complete";
})(TflApiPresentationEntitiesRoadProjectPhaseEnum || (TflApiPresentationEntitiesRoadProjectPhaseEnum = {}));
var TflApiPresentationEntitiesRoadProject = /** @class */ (function (_super) {
    __extends(TflApiPresentationEntitiesRoadProject, _super);
    function TflApiPresentationEntitiesRoadProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boroughsBenefited" }),
        __metadata("design:type", Array)
    ], TflApiPresentationEntitiesRoadProject.prototype, "boroughsBenefited", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=constructionEndDate" }),
        __metadata("design:type", Date)
    ], TflApiPresentationEntitiesRoadProject.prototype, "constructionEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=constructionStartDate" }),
        __metadata("design:type", Date)
    ], TflApiPresentationEntitiesRoadProject.prototype, "constructionStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consultationEndDate" }),
        __metadata("design:type", Date)
    ], TflApiPresentationEntitiesRoadProject.prototype, "consultationEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consultationPageUrl" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadProject.prototype, "consultationPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consultationStartDate" }),
        __metadata("design:type", Date)
    ], TflApiPresentationEntitiesRoadProject.prototype, "consultationStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contactEmail" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadProject.prototype, "contactEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contactName" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadProject.prototype, "contactName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cycleSuperhighwayId" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadProject.prototype, "cycleSuperhighwayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalPageUrl" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadProject.prototype, "externalPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phase" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadProject.prototype, "phase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectDescription" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadProject.prototype, "projectDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadProject.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectName" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadProject.prototype, "projectName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectPageUrl" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadProject.prototype, "projectPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectSummaryPageUrl" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadProject.prototype, "projectSummaryPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemeName" }),
        __metadata("design:type", String)
    ], TflApiPresentationEntitiesRoadProject.prototype, "schemeName", void 0);
    return TflApiPresentationEntitiesRoadProject;
}(SpeakeasyBase));
export { TflApiPresentationEntitiesRoadProject };
