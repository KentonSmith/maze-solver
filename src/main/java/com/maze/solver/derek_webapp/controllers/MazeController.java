package com.maze.solver.derek_webapp.controllers;

import com.maze.solver.derek_webapp.models.ConcatStringResponse;
import com.maze.solver.derek_webapp.models.MazeAnswerResponse;
import com.maze.solver.derek_webapp.models.MazeInformationRequest;
import com.maze.solver.derek_webapp.services.MazeSolvingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/")
public class MazeController {

    @Autowired
    private MazeSolvingService mazeSolvingService;

    @ResponseBody
    @RequestMapping(value = "/solve_maze", method = RequestMethod.POST)
    public MazeAnswerResponse solveMaze(@RequestBody MazeInformationRequest mazeInformationRequest) {
        return mazeSolvingService.solveMaze(mazeInformationRequest);
    }

    @ResponseBody
    @RequestMapping(value = "/concat_string", method = RequestMethod.GET)
    public ConcatStringResponse concatString(@RequestParam("arg1") String arg1,
                                             @RequestParam("arg2") String arg2) {
        ConcatStringResponse response = new ConcatStringResponse();
        response.setConcatArg1Arg2(arg1 + arg2);

        return response;
    }


}
