package operations




type PlayerSeasonSplitStatsFormatEnum string

const (
    PlayerSeasonSplitStatsFormatEnumXML PlayerSeasonSplitStatsFormatEnum = "XML"
PlayerSeasonSplitStatsFormatEnumJSON PlayerSeasonSplitStatsFormatEnum = "JSON"
)



type PlayerSeasonSplitStatsSplitEnum string

const (
    PlayerSeasonSplitStatsSplitEnumL PlayerSeasonSplitStatsSplitEnum = "L"
PlayerSeasonSplitStatsSplitEnumR PlayerSeasonSplitStatsSplitEnum = "R"
PlayerSeasonSplitStatsSplitEnumS PlayerSeasonSplitStatsSplitEnum = "S"
)


type PlayerSeasonSplitStatsPathParams struct {
    Format PlayerSeasonSplitStatsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    Split PlayerSeasonSplitStatsSplitEnum `pathParam:"style=simple,explode=false,name=split"`
    
}

type PlayerSeasonSplitStatsRequest struct {
    PathParams PlayerSeasonSplitStatsPathParams 
    
}

type PlayerSeasonSplitStatsResponse struct {
    ContentType string 
    PlayerSeasons []interface{} 
    StatusCode int64 
    
}

