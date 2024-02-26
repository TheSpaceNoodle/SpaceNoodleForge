import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  myWorks: {
    title: string;
    links: { outLink?: string; gitHub?: string };
    text: string;
  }[] = [
    {
      title: 'Kherson Tours',
      links: {
        outLink: 'https://www.ntours.ks.ua',
        gitHub: 'https://github.com/SheogorathD/KTurism',
      },
      text: 'This website was my wery first big project so it’s design not that good. Built with <span class="highlight">HTML</span>, <span class="highlight">CSS</span>, <span class="highlight">JS</span> and than switched to <span class="highlight">WordPress</span>.',
    },
    {
      title: 'KSU Pool',
      links: {
        outLink: 'http://test2.kspu.edu',
      },
      text: 'KSU Pool website. My mission was to create design and frontend part of the website. Built with <span class="highlight">Angular</span> (<span class="highlight">TypeScript</span>), <span class="highlight">Angular Materal</span>, <span class="highlight">SCSS</span>.',
    },
    {
      title: 'Accessible Schedule',
      links: {
        outLink: 'https://accessible-cringe-schedule.herokuapp.com',
        gitHub: 'https://github.com/SheogorathD/DaySchedule',
      },
      text: 'My personal project. Built with <span class="highlight">MERN</span> stack as my university project more like skill test. Can be used but there is better apps for such things.',
    },
    {
      title: 'Advice Generator',
      links: {
        gitHub: 'https://github.com/SheogorathD/advice-generator',
      },
      text: 'Simple app that shows advices from <span class="highlight">Advice Slip API</span>. Built with <span class="highlight">Angular</span> and <span class="highlight">SCSS</span>.',
    },
    {
      title: 'SpaceNoodleForge',
      links: {
        outLink: '#home',
        gitHub: 'https://github.com/SheogorathD/SpaceNoodleForge',
      },
      text: 'My <span class="highlight">portfolio website</span> (the one you are reading this at). Built with <span class="highlight">Angular</span> and <span class="highlight">CSS</span>.',
    },
    {
      title: 'Random Challenges',
      links: {
        outLink: 'https://randomnoodlechallenges.web.app',
        gitHub: 'https://github.com/SheogorathD/random-challenges',
      },
      text: 'The idea of this project is to help developers to get more hands-on experience by completing challenges proposed by other people. Built with <span class="highlight">Angular</span>, <span class="highlight">SCSS</span> and <span class="highlight">Firebase</span>.',
    },
    {
      title: 'KSU Startups',
      links: {
        outLink: 'https://startup.kspu.edu/welcome',
        gitHub: 'https://github.com/SheogorathD/ksu-startups',
      },
      text: 'My <span class="highlight">latest project</span> and my diploma project. This website will help startup founders find investors for their projects. Built with <span class="highlight">Angular</span>, <span class="highlight">NgRx</span>, <span class="highlight">SCSS</span> and <span class="highlight">Firebase</span>.',
    },
    // {
    //   title: '',
    //   links: {
    //     outLink: '',
    //     gitHub: '',
    //   },
    //   text: '',
    // },
  ];

  trackByIndex(id: number, element: any) {
    return element ? element.id : null;
  }
}
